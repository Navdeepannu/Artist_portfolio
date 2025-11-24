export function Footer() {
  return (
    <footer className="border-t border-border-subtle px-6 py-10 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Isabel Laurent Studio</p>
        <p className="uppercase tracking-[0.35em]">Lisbon · Worldwide</p>
      </div>
    </footer>
  );
}
