import { Briefcase, CodeXml, Mail } from "lucide-react";

const SOCIAL_ICONS = {
  GitHub: CodeXml,
  LinkedIn: Briefcase,
  Email: Mail,
};

const socials = [
  { label: "GitHub", url: "https://github.com/Bilhalv" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/pedro-bilhalva/",
  },
  { label: "Email", url: "mailto:pedrobilhalvaoliveira@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center gap-4 border-t border-border px-6 py-6">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {socials.map((social) => {
          const Icon = SOCIAL_ICONS[social.label];
          return (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
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
      <p className="text-xs text-text-muted">
        Site logos by{" "}
        <a
          href="https://github.com/SAWARATSUKI/KawaiiLogos"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent-soft transition-colors hover:text-accent"
        >
          SAWARATSUKI (KawaiiLogos)
        </a>
      </p>
    </footer>
  );
}
