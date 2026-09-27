import Button from "./Button.jsx";

export default function ErrorNotice({ message = "Something went wrong." }) {
  return (
    <div className="flex w-full max-w-xl flex-col items-center gap-3 rounded-3xl border border-error/30 bg-error/10 px-6 py-10 text-center">
      <p className="font-semibold text-error">{message}</p>
      <Button
        type="button"
        variant="danger"
        size="sm"
        onClick={() => window.location.reload()}
      >
        Refresh page
      </Button>
    </div>
  );
}