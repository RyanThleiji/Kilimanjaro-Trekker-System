# KTS Data Model Reference

Current backend/database models:

## User
- `_id`
- `name`
- `email`
- `passwordHash`
- `role`: `public | ranger | staff | guide`
- timestamps

## HikeRegistration
- `_id`
- `userId -> User`
- `trailId -> Trail`
- `hikeDate`
- `status`: `planned | active | completed | cancelled`
- timestamps

## Trail
- `_id`
- `name`
- `description`
- `difficulty`
- `distance`
- `status`: `open | restricted | closed`
- `condition`
- `conditionUpdatedAt`
- `conditionUpdatedBy -> User`
- timestamps

## Event
- `_id`
- `title`
- `description`
- `type`: `information | warning`
- `category`: `weather | construction | local_event | emergency | trail`
- `location`
- `startDate`
- `endDate`
- `relatedTrailId -> Trail` optional
- `relatedFacilityId -> Facility` optional
- `createdBy -> User`
- timestamps

## WeatherReading
- `_id`
- `location`
- `temperature`
- `conditions`
- `timestamp`

## Facility
- `_id`
- `name`
- `type`: `ranger_station | main_entrance | other`
- `location`
- `status`
- `description`
- `hasWorkstation`
- `contactInfo`
- timestamps

## Broadcast
- `_id`
- `eventId -> Event`
- `message`
- `status`: `queued | sent | failed`
- `createdAt`
- `sentAt`

## Simplifications

- A trekker is a `User` with one or more `HikeRegistration` records.
- A ranger is represented by `User.role = ranger`.
- Ranger stations are `Facility` records with `type = ranger_station`.
- Alerts are warning `Event` records.
- Trail condition is stored on `Trail` for now.
- Summit camera is treated as an external/configured link rather than a database model.
