export default function WeatherSource() {
  return (
    <p className="weather-source">
      Summit weather estimates by <a href="https://open-meteo.com/">Open-Meteo</a>.
      {' '}Model data, not an on-site station. Refreshes every 15 minutes.
    </p>
  );
}
