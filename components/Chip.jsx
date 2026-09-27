export default function Chip({ filled = true, key, children }) {
  const unFilledClass = "text-accent-soft bg-accent/10";
  const filledClass = "bg-accent";

  return (
    <span
      key={key}
      className={
        "border border-accent px-4 py-1.5 text-sm " +
        (filled ? filledClass : unFilledClass) +
        " rounded-full"
      }
    >
      {children}
    </span>
  );
}
