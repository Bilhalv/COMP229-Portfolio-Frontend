import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-6xl font-bold text-text-primary">404</h1>
      <p className="text-text-muted">This page does not exist.</p>
      <Link
        to="/"
        className="rounded-md bg-accent px-6 py-2.5 font-semibold text-text-primary transition-colors hover:bg-accent-hover"
      >
        Back Home
      </Link>
    </div>
  );
}
