import { contactSocials } from "/services/contact";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-4 border-t border-border px-6 py-6">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {contactSocials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.url}
              target={social.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center gap-2 text-sm font-semibold text-text-secondary transition-colors hover:text-accent-soft"
            >
              <Icon className="size-5" />
              {social.label}
            </a>
          );
        })}
      </div>
      <p className="text-xs text-text-muted">
        © {new Date().getFullYear()} Pedro Bilhalva Oliveira
      </p>
    </footer>
  );
}