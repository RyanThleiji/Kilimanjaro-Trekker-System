import BackToHome from './BackToHome.jsx';

export default function PagePlaceholder({ title, children }) {
  return (
    <main className="page-shell">
      <h1>{title}</h1>
      <p>{children}</p>

      {/* TODO: Replace this placeholder with the real feature UI. */}

      <BackToHome />
    </main>
  );
}
