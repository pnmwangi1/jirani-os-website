export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary-light border-t-primary" />
        <span className="text-sm text-ink-muted">Loading…</span>
      </div>
    </div>
  );
}
