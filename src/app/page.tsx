export default function Home() {
  return (
    <div className="min-h-screen bg-mono-100">
      {/* Logo — center sits at y=0, top half above viewport.
          Revealed naturally during overscroll bounce. */}
      <div className="flex justify-center">
        <img
          src="/logo.svg"
          alt="Motoniq"
          width={270}
          height={256}
          className="-translate-y-1/2"
        />
      </div>
    </div>
  );
}
