import Button from "/components/Button.jsx";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-5 px-6 text-center">
      <img
        src="/kawaii/404.png"
        alt="404 Not Found"
        className="w-90 scale-120 hover:scale-140 transition-transform"
        loading="lazy"
        decoding="async"
      />
      <p className="text-text-muted">This page does not exist.</p>
      <Button to="/">Back Home</Button>
    </div>
  );
}