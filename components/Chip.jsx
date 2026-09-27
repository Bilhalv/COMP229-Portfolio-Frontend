export default function Chip({ filled = true, children }) {
  const unFilledClass = "text-accent-soft bg-accent/10";
  const filledClass = "bg-accent text-background";

  return (
    <span
      className={
        "border border-accent px-4 py-1.5 text-sm font-semibold " +
        (filled ? filledClass : unFilledClass) +
        " rounded-full"
      }
    >
      {children}
    </span>
  );
}