# KTS API Route Reference

Collection GET and POST routes are implemented for all seven models. GET returns
an array (200); POST returns the saved document (201). GET database failures return
500; POST failures return 400 with a `message` field, following the Trail controller.

Single-item GET, PUT, DELETE, and authentication routes remain scaffolded (501),
except Trails, which only defines collection GET/POST. Filters are future work.
Field definitions are listed in `DATA_MODELS.md`. Required POST fields:

| Collection | Required fields |
| --- | --- |
| users | name, email (unique), passwordHash |
| trails | name |
| events | title, type, category |
| facilities | name, type, location |
| weather-readings | location, temperature |
| broadcasts | eventId, message |
| hike-registrations | userId, trailId, hikeDate |

Use document `_id` values for reference fields. Mongoose validates field types,
required fields, and enums; these endpoints do not check that referenced records
exist. No authentication or access control is implemented yet.

Weather uses the existing `/api/weather-readings` path.
User creation requires `name`, `email`, and an already prepared `passwordHash`;
this is a basic data endpoint, not account registration. User GET/POST responses
omit `passwordHash`. Password hashing and authentication are still TODO.
Broadcast creation stores a record only; automatic delivery and weather warnings
remain TODO.

Run the database smoke test with the backend running:

```sh
npm run test:smoke --prefix server
```

This creates one clearly labeled test record per model in the configured database
and leaves them available for inspection. It uses the created User/Trail/Event IDs
for related records. Use `KTS_API_URL` to override `http://localhost:5001/api`.

## Authentication

```text
POST /api/auth/register   TODO
POST /api/auth/login      TODO
```

## Users

```text
GET    /api/users
GET    /api/users/:id
POST   /api/users
PUT    /api/users/:id
DELETE /api/users/:id
```

## Hike Registrations

```text
GET    /api/hike-registrations
GET    /api/hike-registrations/:id
POST   /api/hike-registrations
PUT    /api/hike-registrations/:id
DELETE /api/hike-registrations/:id
```

Useful future filters:

```text
/api/hike-registrations?date=YYYY-MM-DD
/api/hike-registrations?trailId=...
/api/hike-registrations?userId=...
```

## Trails

```text
GET    /api/trails
GET    /api/trails/:id
POST   /api/trails
PUT    /api/trails/:id
DELETE /api/trails/:id
```

## Events

```text
GET    /api/events
GET    /api/events/:id
POST   /api/events
PUT    /api/events/:id
DELETE /api/events/:id
```

Useful future filters:

```text
/api/events?type=warning
/api/events?category=weather
```

## Weather Readings

```text
GET    /api/weather-readings
GET    /api/weather-readings/:id
POST   /api/weather-readings
PUT    /api/weather-readings/:id
DELETE /api/weather-readings/:id
```

## Facilities

```text
GET    /api/facilities
GET    /api/facilities/:id
POST   /api/facilities
PUT    /api/facilities/:id
DELETE /api/facilities/:id
```

Ranger stations can be queried later with:

```text
/api/facilities?type=ranger_station
```

## Broadcasts

```text
GET    /api/broadcasts
GET    /api/broadcasts/:id
POST   /api/broadcasts
PUT    /api/broadcasts/:id
DELETE /api/broadcasts/:id
```

A warning Event should eventually trigger Broadcast creation and delivery automatically.

## Health

```text
GET /api/health
```

This endpoint is already implemented and does not require MongoDB.
