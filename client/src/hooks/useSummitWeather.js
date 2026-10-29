import { useEffect, useState } from 'react';
import { getSummitWeather } from '../services/weather.js';

// we can adjust how often we want the weather to update here.
// not sure if different trailes are going to have different weather impacts but we can figure that out later
export default function useSummitWeather() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let controller;
    let active = true;
    async function load() {
      controller?.abort();
      controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 15000);
      try {
        const data = await getSummitWeather(controller.signal);
        if (active) {
          setWeather(data);
          setError('');
        }
      } catch {
        if (active) {
          setWeather(null);
          setError('Weather unavailable. Please try again later.');
        }
      } finally {
        clearTimeout(timeout);
      }
    }
    load();
    const interval = setInterval(load, 15 * 60 * 1000);
    return () => {
      active = false;
      controller?.abort();
      clearInterval(interval);
    };
  }, []);

  return { weather, error, loading: !weather && !error };
}
