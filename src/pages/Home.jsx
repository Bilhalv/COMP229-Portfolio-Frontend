import Button from "/components/Button.jsx";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-8 px-6 py-16 text-center">
      <img
        src="/kawaii/iam-programmer.png"
        alt="I am a Programmer"
        className="w-56 scale-120 rounded-2xl transition-transform duration-300 hover:scale-140"
        loading="lazy"
        decoding="async"
      />
      <p className="max-w-xl text-lg text-text-secondary">
        A Software engineering student at Centennial College passionate about
        building clean, user-friendly web experiences. Welcome to my portfolio!
        take a look at what I have been working on.
      </p>
      <blockquote>
        <span className="font-semibold text-accent-soft">My mission: </span>
        to design accessible, high-quality web experiences that solve real
        problems and make digital spaces simpler for everyone.
      </blockquote>
      <div className="flex gap-4">
        <Button to="/projects">View Projects</Button>
        <Button to="/about" variant="outline">
          About Me
        </Button>
        <Button to="/contact" variant="outline">
          Contact Me
        </Button>
      </div>
    </div>
  );
}
