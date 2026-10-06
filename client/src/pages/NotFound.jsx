import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="page-shell">
      <h1>Page Not Found</h1>
      <Link to="/">Back to Dashboard</Link>
    </main>
  );
}
