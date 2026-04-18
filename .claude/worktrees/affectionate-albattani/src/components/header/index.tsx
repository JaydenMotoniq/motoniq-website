import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";

export const Header = () => {
  return (
    <header className="relative flex min-h-33 w-full items-start justify-between p-6 md:px-16 xl:min-h-45.5 xl:px-50 2xl:px-64">
      <Image
        src="/icons/logo.svg"
        alt="Motoniq"
        width={106}
        height={16}
        className="hidden md:block"
        preload
      />
      <Link
        href="https://form.typeform.com/to/xymDjEjj"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block"
      >
        <Button className="text-sm">CONTACT US</Button>
      </Link>

      <div className="pointer-events-none absolute top-0 left-1/2 h-66 w-73.5 -translate-x-1/2 -translate-y-1/2 xl:h-91 xl:w-102">
        <Image
          src="/icons/large-logo.svg"
          alt="Large Logo"
          width={408}
          height={364}
          className="sticky top-0 h-full w-full"
          preload
        />
      </div>
    </header>
  );
};
