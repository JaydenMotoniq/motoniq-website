import Link from "next/link";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-64 pt-76 pb-100">
      <div className="flex w-full flex-col items-center justify-center gap-9">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-wrap items-center justify-center gap-4">
            <p className="font-neue-haas-grotesk-display text-center text-[46px] font-bold">
              The
            </p>
            <div className="bg-primary inline-flex items-center justify-center py-1.5">
              <p className="font-pp-fraktion-mono text-center text-[46px] leading-none">
                [Data]
              </p>
            </div>
            <p className="font-neue-haas-grotesk-display text-center text-[46px] font-bold">
              Engine for
            </p>
            <div className="bg-primary inline-flex items-center justify-center py-1.5">
              <p className="font-pp-fraktion-mono text-center text-[46px] leading-none">
                /Physical AI
              </p>
            </div>
          </div>
          <p className="text-mono-600 max-w-206 text-center text-lg leading-6 whitespace-pre-wrap">
            The only full-stack data system built for robots to perform in the
            real world.
          </p>
        </div>

        <Link
          href="https://form.typeform.com/to/xymDjEjj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button>PARTNER WITH US →</Button>
        </Link>
      </div>
    </main>
  );
}
