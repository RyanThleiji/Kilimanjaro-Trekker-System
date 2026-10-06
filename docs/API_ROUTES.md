# KTS API Route Reference

These are the planned REST routes. Most currently return HTTP 501 until implemented.

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
