import { Link } from 'react-router-dom';

export default function PagePlaceholder({ title, children }) {
  return (
    <main className="page-shell">
      <h1>{title}</h1>
      <p>{children}</p>

      {/* TODO: Replace this placeholder with the real feature UI. */}

      <Link className="back-link" to="/">
        Back to Dashboard
      </Link>
    </main>
  );
}
