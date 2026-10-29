import BackToHome from '../components/BackToHome.jsx';
import WeatherSource from '../components/WeatherSource.jsx';
import useSummitWeather from '../hooks/useSummitWeather.js';

export default function Weather() {
  const { weather, error, loading } = useSummitWeather();

  return (
    <main className="page-shell">
      <span className="section-eyebrow">KILIMANJARO SUMMIT</span>
      <h1>Current Weather</h1>
      <p>Uhuru Peak · 3.07583° S, 37.35333° E · Elevation 5,895 m</p>
      <p aria-live="polite">
        {loading ? 'Loading summit weather…' : error || `Weather time: ${weather.time}`}
      </p>
      {weather && (
        <div className="weather-page-grid">
          <div className="status-card">
            <div className="status-card-header">Temperature</div>
            <h3>{weather.temperature}</h3>
            <p>{weather.description}</p>
            <small>Feels like {weather.feelsLike}</small>
          </div>
          <div className="status-card">
            <div className="status-card-header">Wind & Humidity</div>
            <h3>{weather.wind}</h3>
            <p>Humidity {weather.humidity}</p>
          </div>
        </div>
      )}
      <WeatherSource />
      <BackToHome />
    </main>
  );
}
