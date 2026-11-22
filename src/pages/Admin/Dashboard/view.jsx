import { FolderKanban, HardHat, MessageSquareQuote, Users } from "lucide-react";
import PageHeader from "/components/PageHeader";
import Button from "/components/Button.jsx";

const sections = [
  {
    title: "Users",
    description: "Create, edit, list, and delete user records.",
    to: "/admin/users",
    icon: Users,
  },
  {
    title: "Projects",
    description: "Manage portfolio projects shown in the application.",
    to: "/admin/projects",
    icon: FolderKanban,
  },
  {
    title: "Services",
    description: "Manage the services you offer.",
    to: "/admin/services",
    icon: HardHat,
  },
  {
    title: "References",
    description: "Manage testimonials and professional references.",
    to: "/admin/references",
    icon: MessageSquareQuote,
  },
];

export default function AdminDashboardView() {
  return (
    <div className="flex w-full flex-col items-center gap-8 px-6 py-16">
      <PageHeader
        title="Admin Dashboard"
        subtitle="Manage the content and records used by your portfolio application."
      />

      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <div
              key={section.title}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-surface p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-accent/10 p-3 text-accent">
                  <Icon className="size-6" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-text-primary">
                    {section.title}
                  </h2>
                  <p className="text-sm text-text-muted">{section.description}</p>
                </div>
              </div>
              <div className="mt-auto">
                <Button to={section.to} size="sm">
                  Manage {section.title}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
