import { Component } from "react";

// Catches errors thrown while rendering the page tree and shows a fallback instead of letting the whole application unmount.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Page crashed:", error, info?.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex w-full flex-col items-center gap-4 px-6 py-16 text-center">
          <h1 className="text-4xl font-bold text-text-primary">
            Something went wrong
          </h1>
          <p className="max-w-md text-text-muted">
            An unexpected error occurred while rendering this page. Try
            reloading the page.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-md bg-accent px-6 py-2.5 font-semibold text-background transition-colors hover:bg-accent-hover"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}