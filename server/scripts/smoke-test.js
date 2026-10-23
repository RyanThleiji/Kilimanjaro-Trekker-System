import assert from 'node:assert/strict';

const baseUrl = process.env.KTS_API_URL || 'http://localhost:5001/api';
const label = `KTS smoke test ${Date.now()}`;
const ids = {};
let failures = 0;

const cases = [
  ['users', () => ({ name: label, email: `kts-smoke-${Date.now()}@example.com`, passwordHash: 'test-only-not-a-login-hash' })],
  ['trails', () => ({ name: label, distance: 10 })],
  ['events', () => ({ title: label, type: 'information', category: 'trail', createdBy: ids.users, relatedTrailId: ids.trails })],
  ['facilities', () => ({ name: label, type: 'ranger_station', location: 'Smoke test location' })],
  ['weather-readings', () => ({ location: label, temperature: 42, conditions: 'Smoke test' })],
  ['broadcasts', () => {
    assert.ok(ids.events, 'Event creation must succeed first');
    return { eventId: ids.events, message: label };
  }],
  ['hike-registrations', () => {
    assert.ok(ids.users && ids.trails, 'User and Trail creation must succeed first');
    return { userId: ids.users, trailId: ids.trails, hikeDate: '2026-11-01' };
  }],
];

async function request(path, options) {
  return fetch(`${baseUrl}/${path}`, { ...options, signal: AbortSignal.timeout(20000) });
}

console.log(`Testing ${baseUrl}; records labeled "${label}" remain for inspection.`);
for (const [path, payload] of cases) {
  try {
    const data = payload();
    const response = await request(path, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data),
    });
    assert.equal(response.status, 201, `${path} POST status`);
    const created = await response.json();
    assert.ok(created._id, 'POST must return a document ID');
    ids[path] = created._id;
    for (const [key, value] of Object.entries(data)) {
      if (key !== 'passwordHash' && key !== 'hikeDate') assert.equal(created[key], value);
    }
    if (path === 'users') assert.ok(!('passwordHash' in created));
    console.log(`PASS POST /api/${path} (${created._id})`);
  } catch (error) {
    failures++;
    console.error(`FAIL POST /api/${path}: ${error.message}`);
  }
  try {
    const response = await request(path);
    assert.equal(response.status, 200, `${path} GET status`);
    const collection = await response.json();
    assert.ok(Array.isArray(collection));
    assert.ok(ids[path], 'No created document to verify');
    assert.ok(collection.some(item => item._id === ids[path]), 'GET must include the created document');
    if (path === 'users') assert.ok(collection.every(item => !('passwordHash' in item)));
    console.log(`PASS GET /api/${path}`);
  } catch (error) {
    failures++;
    console.error(`FAIL GET /api/${path}: ${error.message}`);
  }
}
console.log(`${14 - failures}/14 POST/GET checks passed.`);
process.exitCode = failures ? 1 : 0;
