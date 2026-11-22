export function SkeletonBlock({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-md bg-border/60 ${className}`.trim()}
    />
  );
}

export function ProjectCardSkeleton() {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface">
      <SkeletonBlock className="aspect-square w-full rounded-none" />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <SkeletonBlock className="h-6 w-2/3" />
          <SkeletonBlock className="h-5 w-20 rounded-full" />
        </div>
        <SkeletonBlock className="h-4 w-full" />
        <SkeletonBlock className="h-4 w-5/6" />
        <SkeletonBlock className="h-4 w-4/6" />
        <div className="flex flex-wrap gap-1.5 pt-1">
          <SkeletonBlock className="h-6 w-16 rounded-full" />
          <SkeletonBlock className="h-6 w-20 rounded-full" />
          <SkeletonBlock className="h-6 w-14 rounded-full" />
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <SkeletonBlock className="h-4 w-20" />
          <SkeletonBlock className="h-4 w-28" />
        </div>
      </div>
    </article>
  );
}

export function ServiceCardSkeleton() {
  return (
    <article className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-6">
      <SkeletonBlock className="size-14 rounded-2xl" />
      <SkeletonBlock className="h-6 w-1/2" />
      <SkeletonBlock className="h-4 w-full" />
      <SkeletonBlock className="h-4 w-5/6" />
      <SkeletonBlock className="h-4 w-2/3" />
      <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
        <SkeletonBlock className="h-6 w-16 rounded-full" />
        <SkeletonBlock className="h-6 w-20 rounded-full" />
        <SkeletonBlock className="h-6 w-14 rounded-full" />
      </div>
    </article>
  );
}

export function ReferenceCardSkeleton() {
  return (
    <article className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-surface p-6">
      <SkeletonBlock className="size-8 rounded-md" />
      <SkeletonBlock className="h-4 w-full" />
      <SkeletonBlock className="h-4 w-full" />
      <SkeletonBlock className="h-4 w-5/6" />
      <SkeletonBlock className="h-4 w-4/6" />
      <div className="mt-auto flex flex-col gap-2 pt-2">
        <SkeletonBlock className="h-5 w-32" />
        <SkeletonBlock className="h-4 w-24" />
      </div>
    </article>
  );
}

export function TableSkeleton({ columns = 4, rows = 5 }) {
  return (
    <div className="w-full max-w-6xl overflow-x-auto rounded-3xl border border-border bg-surface">
      <table className="min-w-full text-left text-sm">
        <thead className="border-b border-border bg-background/40">
          <tr>
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} className="px-4 py-3">
                <SkeletonBlock className="h-4 w-20" />
              </th>
            ))}
            <th className="px-4 py-3">
              <SkeletonBlock className="h-4 w-16" />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-b border-border last:border-b-0"
            >
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="px-4 py-3">
                  <SkeletonBlock className="h-4 w-full max-w-32" />
                </td>
              ))}
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  <SkeletonBlock className="h-8 w-20 rounded-lg" />
                  <SkeletonBlock className="h-8 w-20 rounded-lg" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FormSkeleton({ fields = 4 }) {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-4 rounded-3xl border border-border bg-surface p-6">
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i} className="flex flex-col gap-1">
          <SkeletonBlock className="h-4 w-24" />
          <SkeletonBlock className="h-10 w-full rounded-md" />
        </div>
      ))}
      <div className="flex gap-3 pt-2">
        <SkeletonBlock className="h-10 w-32 rounded-lg" />
        <SkeletonBlock className="h-10 w-24 rounded-lg" />
      </div>
    </div>
  );
}
