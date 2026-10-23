import { Link } from 'react-router-dom';

export default function BackToHome() {
  return (
    <Link className="back-link" to="/">
      ← Back to Home
    </Link>
  );
}
