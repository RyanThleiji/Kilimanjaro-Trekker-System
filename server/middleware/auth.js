// TODO: Add authentication and role-based authorization here.
// Project rule reminder:
// - Public users: read-only
// - Rangers, park staff, guide leads: read/write/delete

export function requireAuth(req, res, next) {
  // Temporary pass-through so the starter app is easy to run.
  next();
}
