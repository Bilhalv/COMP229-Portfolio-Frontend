export default function ErrorNotice({ message = "Something went wrong." }) {
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 rounded-3xl border border-error/30 bg-error/10 px-6 py-10 text-center">
      <p className="font-semibold text-error">{message}</p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="rounded-md border border-error px-4 py-2 text-sm font-semibold text-error transition-colors hover:bg-error/10"
      >
        Refresh page
      </button>
    </div>
  );
}