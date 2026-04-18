import Link from "next/link";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-132px)] flex-col items-center justify-center px-6 py-10 md:min-h-auto md:px-16 md:py-64 xl:px-50 xl:py-50 2xl:px-64 2xl:pt-64 2xl:pb-100">
      <div className="flex w-full flex-col items-center justify-center gap-7">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <p className="font-suisse-intl text-center text-[34px] leading-none font-bold md:text-[40px] 2xl:text-[46px]">
            Internet-Scale Intelligence for Physical AI
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
