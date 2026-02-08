export default function Page() {
  return (
    <>
      <header className="border-border bg-surface sticky top-0 z-40 border-b">
        <div className="mx-auto flex max-w-7xl items-center gap-3 p-3">
          <div className="text-primary text-xl font-bold">Minibaba</div>
          <div className="flex-1">
            <input
              className="border-border bg-bg text-text focus:border-primary w-full rounded-lg border px-3 py-2 text-sm outline-none"
              placeholder="Qidirish..."
            />
          </div>
        </div>
      </header>

      <div className="space-y-6">
        {/* Hero */}
        <div className="bg-bg rounded-xl p-6">
          <h1 className="text-text text-2xl font-semibold">Minibaba</h1>
          <p className="text-text-muted mt-1">
            Ulgurji marketplace. Tokenlar ishlayaptimi? Hozir bilamiz.
          </p>
          <button className="bg-primary text-text-inverse mt-4 rounded-lg px-4 py-2">
            Asosiy CTA
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="border-border bg-surface rounded-lg border p-4">
            <p className="text-text-muted text-sm">Surface card</p>
            <p className="text-text font-medium">Oq karta</p>
          </div>

          <div className="border-border bg-bg rounded-lg border p-4">
            <p className="text-text-muted text-sm">BG card</p>
            <p className="text-text font-medium">Asosiy fon</p>
          </div>

          <div className="border-border bg-bg-dark rounded-lg border p-4">
            <p className="text-text-inverse text-sm">Dark card</p>
            <p className="text-text-inverse font-medium">Qorong‘i blok</p>
          </div>
        </div>

        {/* Status */}
        <div className="flex gap-3">
          <span className="bg-success text-text-inverse rounded-md px-3 py-1">Success</span>
          <span className="bg-warning text-text-inverse rounded-md px-3 py-1">Warning</span>
          <span className="bg-error text-text-inverse rounded-md px-3 py-1">Error</span>
        </div>
      </div>
    </>
  );
}
