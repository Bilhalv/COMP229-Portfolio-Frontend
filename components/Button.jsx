import { Link } from "react-router-dom";

const variants = {
  filled: "bg-accent text-background hover:bg-accent-soft",
  outline:
    "border border-border text-text-primary hover:border-text-primary hover:bg-surface-hover",
  danger: "border border-error text-error hover:bg-error/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60";

// Renders as a router Link (to), a plain anchor (href), or a <button>, sharing
// one set of CTA styles across the app.
export default function Button({
  variant = "filled",
  size = "md",
  to,
  href,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}