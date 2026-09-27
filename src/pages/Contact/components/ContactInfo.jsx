import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactInfo({ info }) {
  return (
    <aside className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-surface p-6">
      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-text-primary">
          Contact Information
        </h2>
        <p className="text-sm text-text-muted">
          Prefer direct contact? Here is how to reach me.
        </p>
      </div>
      <ul className="flex flex-col gap-4 text-sm">
        <li className="flex items-center gap-3 text-text-secondary">
          <MapPin className="size-5 shrink-0 text-accent-soft" />
          {info.location}
        </li>
        <li>
          <a
            href={`tel:${info.phone}`}
            className="flex items-center gap-3 text-text-secondary transition-colors hover:text-accent-soft"
          >
            <Phone className="size-5 shrink-0 text-accent-soft" />
            {info.phone}
          </a>
        </li>
        <li>
          <a
            href={`mailto:${info.email}`}
            className="flex items-center gap-3 break-all text-text-secondary transition-colors hover:text-accent-soft"
          >
            <Mail className="size-5 shrink-0 text-accent-soft" />
            {info.email}
          </a>
        </li>
      </ul>
      <div className="mt-auto flex flex-col gap-2">
        {info.socials.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.label}
              href={social.url}
              target={social.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-md border border-border px-4 py-2.5 font-semibold text-text-primary transition-colors hover:border-accent hover:bg-surface-hover"
            >
              <Icon className="size-5 text-accent-soft" />
              {social.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}