import { Link } from "react-router-dom";
import Chip from "/components/Chip.jsx";

const skills = ["Web Development", "UI / UX", "JavaScript", "React"];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center">
      <h1 className="text-5xl font-bold text-text-primary">Bilhalva</h1>
      <p className="max-w-xl text-lg text-text-secondary">
        A Computer Programming student at Centennial College passionate about
        building clean, user-friendly web experiences. Welcome to my portfolio —
        take a look at what I have been working on.
      </p>
      <blockquote>
        <span>My mission: </span>
        to design accessible, high-quality web experiences that solve real
        problems and make digital spaces simpler for everyone.
      </blockquote>
      <ul className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <Chip key={skill} filled={false}>
            {skill}
          </Chip>
        ))}
      </ul>
      <div className="flex gap-4">
        <Link
          to="/projects"
          className="rounded-md bg-accent px-6 py-2.5 font-semibold text-text-primary transition-colors hover:bg-accent-hover"
        >
          View Projects
        </Link>
        <Link
          to="/about"
          className="rounded-md border border-border px-6 py-2.5 font-semibold text-text-primary transition-colors hover:border-text-primary hover:bg-surface-hover"
        >
          About Me
        </Link>
        <Link
          to="/contact"
          className="rounded-md border border-border px-6 py-2.5 font-semibold text-text-primary transition-colors hover:border-text-primary hover:bg-surface-hover"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
