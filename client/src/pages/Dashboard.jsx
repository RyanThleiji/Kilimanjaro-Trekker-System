import React from "react";
import { Link } from 'react-router-dom';

const pages = [
  ['Login', '/login'],
  ['Trails', '/trails'],
  ['Hike Registrations', '/hike-registrations'],
  ['Events', '/events'],
  ['Weather', '/weather'],
  ['Facilities', '/facilities'],
  ['Broadcasts', '/broadcasts'],
  ['Summit Camera', '/camera'],
];

export default function Dashboard() {
  return (
    <main className="page-shell">
      <h1>Kilimanjaro Trekker System</h1>
      <p>Starter dashboard for CS 532.</p>

      <nav className="dashboard-links" aria-label="KTS sections">
        {pages.map(([label, path]) => (
          <Link key={path} to={path}>
            {label}
          </Link>
        ))}
      </nav>

      {/* TODO: Replace placeholder links with the final dashboard design later. */}
    </main>
  );
}
