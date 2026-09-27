export default function PageHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <h1 className="text-4xl font-bold text-text-primary">{title}</h1>
      {subtitle && <p className="max-w-xl text-text-muted">{subtitle}</p>}
    </div>
  );
}