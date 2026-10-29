// Mount Kilimanjaro (Uhuru Peak). Elevation adjusts the model to the summit.
export const KILIMANJARO = { latitude: -3.07583, longitude: 37.35333, elevation: 5895 };

const descriptions = {
  0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
  45: 'Fog', 48: 'Rime fog',
  51: 'Light drizzle', 53: 'Moderate drizzle', 55: 'Dense drizzle',
  56: 'Light freezing drizzle', 57: 'Dense freezing drizzle',
  61: 'Light rain', 63: 'Moderate rain', 65: 'Heavy rain',
  66: 'Light freezing rain', 67: 'Heavy freezing rain',
  71: 'Light snow', 73: 'Moderate snow', 75: 'Heavy snow', 77: 'Snow grains',
  80: 'Light rain showers', 81: 'Moderate rain showers', 82: 'Heavy rain showers',
  85: 'Light snow showers', 86: 'Heavy snow showers',
  95: 'Thunderstorm', 96: 'Thunderstorm with hail', 99: 'Thunderstorm with heavy hail',
};

export async function getSummitWeather(signal) {
  const params = new URLSearchParams({
    ...KILIMANJARO,
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,wind_direction_10m',
    temperature_unit: 'fahrenheit',
    wind_speed_unit: 'mph',
    timeformat: 'unixtime',
  });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, { signal });
  if (!response.ok) throw new Error('Weather request failed');
  const { current } = await response.json();
  const fields = ['temperature_2m', 'apparent_temperature', 'relative_humidity_2m',
    'weather_code', 'wind_speed_10m', 'wind_direction_10m', 'time'];
  if (!current || !fields.every(field => Number.isFinite(current[field]))) {
    throw new Error('Weather data is incomplete');
  }
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return {
    temperature: `${Math.round(current.temperature_2m)}°F`,
    feelsLike: `${Math.round(current.apparent_temperature)}°F`,
    humidity: `${Math.round(current.relative_humidity_2m)}%`,
    description: descriptions[current.weather_code] || 'Unknown conditions',
    wind: `${Math.round(current.wind_speed_10m)} mph ${directions[Math.round(current.wind_direction_10m / 45) % 8]}`,
    time: new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Dar_es_Salaam', month: 'short', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    }).format(new Date(current.time * 1000)) + ' EAT',
  };
}
