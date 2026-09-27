import { STACK_LOGOS } from "/src/utils/techLogos";

// Renders the pastel kawaii logos on light tiles so they read cleanly
// against the dark theme.
export default function TechLogos({ logos = STACK_LOGOS, size = "h-20" }) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3">
      {logos.map((logo) => (
        <li
          key={logo.name}
          className="transition-transform duration-300 hover:scale-140"
        >
          <img
            src={logo.src}
            alt={logo.name}
            className={`${size}`}
            loading="lazy"
            decoding="async"
          />
        </li>
      ))}
    </ul>
  );
}