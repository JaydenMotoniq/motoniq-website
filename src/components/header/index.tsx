import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";

export const Header = () => {
  return (
    <header className="relative flex w-full items-start justify-between px-64 py-6">
      <Image src="/icons/logo.svg" alt="Motoniq" width={106} height={16} />
      <Link
        href="https://form.typeform.com/to/xymDjEjj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>CONTACT US</Button>
      </Link>

      <Image
        src="/icons/large-logo.svg"
        alt="Large Logo"
        width={408}
        height={182}
        className="absolute top-0 left-1/2 -translate-x-1/2"
      />
    </header>
  );
};
