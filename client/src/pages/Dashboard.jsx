import React from 'react';
import { Link } from 'react-router-dom';
import useSummitWeather from '../hooks/useSummitWeather.js';
import WeatherSource from '../components/WeatherSource.jsx';

export default function Dashboard() {
  const { weather, error, loading } = useSummitWeather();
  return (
    <div>
      <header className="navbar">
        <div className="brand">
          <div className="brand-mark">KTS</div>

          <div className="brand-text">
            <strong>Kilimanjaro</strong>
            <span>Trekker System</span>
          </div>
        </div>

        <nav className="nav-links">
          <Link to="/trails">Trails</Link>
          <Link to="/weather">Weather</Link>
          <Link to="/events">Events</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/camera">Camera</Link>
        </nav>

        <Link className="login-button" to="/login">Login</Link>
      </header>

      <main>
        <section className="hero">
          <div className="hero-shade"></div>

          <div className="hero-content">
            <span className="eyebrow">KILIMANJARO TREKKER SYSTEM</span>

            <h1>
              Plan your trek.
              <br />
              Know the mountain.
            </h1>

            <p>
              Trail conditions, weather, alerts and park information
              for a safer Kilimanjaro experience.
            </p>

            <Link className="primary-button" to="/hike-registrations">
              Plan a Trip <span>→</span>
            </Link>
          </div>

          <div className="summit-card">
            <div className="summit-top">
              <span>SUMMIT CONDITIONS</span>
              <span className={`status-dot${weather ? "" : " unavailable"}`}></span>
            </div>

            <div className="temperature">{weather?.temperature || "—"}</div>
            <div className="weather-label" aria-live="polite">
              {weather?.description || (loading ? "Loading weather…" : "Weather unavailable")}
            </div>

            <div className="weather-details">
              <span>{weather ? `Wind ${weather.wind}` : "Wind —"}</span>
              <span>5,895 m</span>
            </div>

            <Link to="/weather">View detailed weather →</Link>
          </div>
        </section>

        <section className="conditions" id="weather">
          <div className="section-title">
            <div>
              <span className="section-eyebrow">SUMMIT WEATHER & SAMPLE PARK DATA</span>
              <h2>Current Conditions</h2>
            </div>

            <span className="updated" aria-live="polite">
              {weather ? `Weather: ${weather.time}` : loading ? "Loading weather…" : error}
            </span>
          </div>

          <div className="condition-grid">
            <StatusCard
              label="Weather"
              to="/weather"
              value={weather?.temperature || "—"}
              status={weather?.description || (loading ? "Loading…" : "Weather unavailable")}
              detail={weather ? `Summit · Wind ${weather.wind}` : "Kilimanjaro summit"}
              icon="°"
              type="normal"
            />

            <StatusCard
              label="Trail Status - TODO"
              to="/trails"
              value="10 Open"
              status="2 Restricted"
              detail="1 Closed"
              icon="▲"
              type="trail"
            />

            <StatusCard
              label="Active Alerts - TODO"
              to="/broadcasts"
              value="Storm Warning"
              status="High winds expected"
              detail="Above 4,500 m"
              icon="!"
              type="warning"
            />

            <StatusCard
              label="Facilities - TODO"
              to="/facilities"
              value="8 Open"
              status="1 Limited"
              detail="Ranger stations online"
              icon="⌂"
              type="normal"
            />
          </div>
          <WeatherSource />
        </section>

        <section className="explore" id="trails">
          <div className="section-title">
            <div>
              <span className="section-eyebrow">PLAN YOUR TREK</span>
              <h2>Explore Kilimanjaro</h2>
            </div>
          </div>

          <div className="explore-grid">
            <ExploreCard
              number="01"
              title="Trails"
              to="/trails"
              description="View routes, difficulty levels and current trail conditions."
            />

            <ExploreCard
              number="02"
              title="Weather"
              to="/weather"
              description="Check current conditions and weather warnings."
            />

            <ExploreCard
              number="03"
              title="Events"
              to="/events"
              description="View park events, announcements and emergency alerts."
            />

            <ExploreCard
              number="04"
              title="Facilities"
              to="/facilities"
              description="Find ranger stations, camps and park facilities."
            />
          </div>
        </section>

        <section className="camera-section" id="camera">
          <div className="camera-content">
            <span className="section-eyebrow">LIVE VIEW</span>
            <h2>Summit Camera</h2>

            <p>
              Check the current view from Mount Kilimanjaro before
              heading up the mountain.
            </p>

            <Link className="secondary-button" to="/camera">
              View Summit Camera →
            </Link>
          </div>

          <div className="live-badge">
            <span></span>
            LIVE
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>KTS</strong>
          <span>Kilimanjaro Trekker System</span>
        </div>

        <span>CS 532 • TeeBeeDee</span>
      </footer>
    </div>
  );
}

function StatusCard({ label, value, status, detail, icon, type, to }) {
  return (
    <Link className={`status-card ${type}`} to={to}>
      <div className="status-card-header">
        <span>{label}</span>
        <div className="status-icon">{icon}</div>
      </div>

      <h3>{value}</h3>
      <p>{status}</p>
      <small>{detail}</small>
    </Link>
  );
}

function ExploreCard({ number, title, description, to }) {
  return (
    <Link className="explore-card" to={to}>
      <span className="card-number">{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <span className="card-arrow">→</span>
    </Link>
  );
}
