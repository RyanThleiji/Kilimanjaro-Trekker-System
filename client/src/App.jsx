import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx';
import Trails from './pages/Trails.jsx';
import HikeRegistrations from './pages/HikeRegistrations.jsx';
import Events from './pages/Events.jsx';
import Weather from './pages/Weather.jsx';
import Facilities from './pages/Facilities.jsx';
import Broadcasts from './pages/Broadcasts.jsx';
import Camera from './pages/Camera.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/trails" element={<Trails />} />
      <Route path="/hike-registrations" element={<HikeRegistrations />} />
      <Route path="/events" element={<Events />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/broadcasts" element={<Broadcasts />} />
      <Route path="/camera" element={<Camera />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
