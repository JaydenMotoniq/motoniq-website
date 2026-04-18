export const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col bg-mono-100">
      {/* Logo — center sits at y=0, top half above viewport.
          Revealed naturally during overscroll bounce.
          Outer wrapper does a one-time reveal on mount, inner wrapper
          floats continuously (subtle breathing). */}
      <div className="flex justify-center">
        <div className="animate-logo-reveal">
          <div className="animate-logo-float">
            <img
              src="/logo.svg"
              alt="Motoniq"
              width={270}
              height={256}
              className="-translate-y-1/2"
            />
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="mx-auto flex w-full max-w-[900px] flex-1 flex-col items-center justify-center gap-6 px-6 pt-8 pb-12 text-center md:px-12 md:pt-12 md:pb-16">
        <span className="font-pp-fraktion-mono uppercase text-mono-500 text-d3">
          A Physical AI Research Foundation
        </span>

        <h1 className="text-mono-700 text-h1">
          A new class of machine intelligence.
          <br />
          Built for physics, not pixels.
        </h1>

        <p className="max-w-[640px] text-mono-600 text-b1">
          One model. Any robot. Any task. Any environment.
          <br />
          No army of engineers.
        </p>
      </div>

      {/* Minimal contact bar — bordered chip boxes */}
      <footer className="mx-auto flex w-full max-w-[900px] flex-col items-center justify-between gap-3 px-6 pb-8 md:flex-row md:px-12 md:pb-12">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center rounded-[4px] border border-mono-300 px-3 py-1 font-pp-fraktion-mono uppercase text-mono-700 text-d3">
            San Francisco
          </span>
          <span className="inline-flex items-center rounded-[4px] border border-mono-300 px-3 py-1 font-pp-fraktion-mono uppercase text-mono-700 text-d3">
            London
          </span>
        </div>
        <a
          href="mailto:contact@motoniq.ai"
          className="inline-flex items-center rounded-[4px] border border-mono-300 px-3 py-1 font-pp-fraktion-mono uppercase text-mono-700 text-d3 transition-colors duration-200 hover:border-mono-700 hover:bg-mono-700 hover:text-mono-100"
        >
          contact@motoniq.ai
        </a>
      </footer>
    </section>
  );
};
