import Link from "next/link";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 md:px-16 md:py-64 xl:px-50 xl:py-50 2xl:px-64 2xl:py-100">
      <div className="flex w-full flex-col items-center justify-center gap-9">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <div className="flex w-full flex-wrap items-center justify-center gap-4">
            <p className="font-neue-haas-grotesk-display text-center text-[34px] leading-none font-bold md:text-[40px] 2xl:text-[46px]">
              The
            </p>
            <div className="bg-primary inline-flex items-center justify-center py-1.5">
              <p className="font-pp-fraktion-mono text-center text-[34px] leading-none md:text-[40px] 2xl:text-[46px]">
                [Data]
              </p>
            </div>
            <p className="font-neue-haas-grotesk-display text-center text-[34px] leading-none font-bold md:text-[40px] 2xl:text-[46px]">
              Engine for
            </p>
            <div className="bg-primary inline-flex items-center justify-center py-1.5">
              <p className="font-pp-fraktion-mono text-center text-[34px] leading-none md:text-[40px] 2xl:text-[46px]">
                /Physical AI
              </p>
            </div>
          </div>
          <p className="text-mono-600 max-w-206 text-center text-sm leading-4 whitespace-pre-wrap md:text-lg md:leading-6">
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
    </div>
  );
}
