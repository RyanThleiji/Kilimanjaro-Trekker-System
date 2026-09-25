# Kilimanjaro Trekker System (KTS)

**Course:** CS 532 - Fall 2026  
**San Diego State University**  
**Team:** TeeBeeDee

## Project Overview

The Kilimanjaro Trekker System (KTS) is a web-based application being developed for Kilimanjaro National Park.

The system is intended to provide park visitors, trekkers, rangers, staff, and guide leads with access to information about:

- Kilimanjaro trails
- Trekker hike registrations
- Trail conditions
- Weather conditions
- Park facilities
- Local and emergency events
- Warning broadcasts
- Ranger facilities
- Summit camera information

The system will also allow authorized park personnel to maintain and update park information.

## User Access

KTS supports different levels of system access.

### Public Users
Public users have read-only access to park information.

They can:

- View trails and trail conditions
- View weather information
- View events and warnings
- View park facility information
- Access trip-planning information
- View the summit camera link
- Register for hikes

### Rangers, Park Staff, and Guide Leads

Authorized users have read, write, and delete access.

They can:

- Update trail information
- Update trail conditions
- Create and update events
- Report warning events
- Update facility information
- Maintain trekker information
- Access KTS from ranger facilities

## Warning System

Events are classified as:

- `information`
- `warning`

Warning events are automatically broadcast to logged-in users.

The system should also generate warning events when drastic weather changes are detected, including:

- Temperature changes of +/- 15°F within 15 minutes
- Flood conditions
- Storm conditions

Broadcast information is stored separately so delivery status can be tracked.

## Development Increments

### Increment 1

The first increment provides basic KTS functionality through networked park workstations.

A ranger at the main Kilimanjaro Park entrance will enter and update information based on reports received from other park personnel.

### Increment 2

The second increment expands the system to:

- Ranger stations throughout the park
- Web-enabled mobile devices
- Direct remote updates by authorized personnel
- Full warning broadcast capabilities

## Technology

### Frontend
- React
- JavaScript
- HTML
- CSS

### Backend
- Node.js
- Express

### Database
- MongoDB
- Mongoose

### Development Tools
- Git / GitHub
- Visual Studio Code
- npm

## Main Data Models

The current database design uses the following main models:

- `User`
- `HikeRegistration`
- `Trail`
- `Event`
- `WeatherReading`
- `Facility`
- `Broadcast`

### Simplified Model Structure

A trekker is represented by a `User` with one or more `HikeRegistration` records.

Rangers, park staff, and guide leads are represented by the `role` field on `User`.

Ranger stations are stored as `Facility` records with:

```text
type = ranger_station