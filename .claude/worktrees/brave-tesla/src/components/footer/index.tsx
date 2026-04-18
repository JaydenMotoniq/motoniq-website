import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col">
      {/* Marquee Tape */}
      {/* <Marquee
        repeat={8}
        className="bg-primary text-mono-800 font-pp-fraktion-mono hidden py-1.5 text-sm tracking-tight uppercase [--duration:20s] [--gap:2rem] md:flex"
      >
        <span>•</span>
        <span>The Full-Stack Data Collection System</span>
      </Marquee> */}

      <footer className="md:bg-mono-800 md:p-16 xl:px-50 xl:py-16 2xl:px-64 2xl:py-16">
        {/* Menu Card */}
        <div className="bg-primary flex flex-col justify-between gap-16 rounded-t-2xl px-6 py-10 md:flex-row md:items-end md:gap-4 md:rounded-2xl md:p-8">
          {/* Left side - Logo and metadata */}
          <div className="flex flex-1 flex-col gap-6 md:gap-10">
            <div className="flex flex-col gap-6">
              <Image
                src="/icons/logo.svg"
                alt="Motoniq"
                width={166}
                height={24}
                className="shrink-0"
              />
              <p className="text-mono-700 text-base leading-5 font-normal">
                Internet-Scale Intelligence for Physical AI
              </p>
            </div>
            <p className="text-mono-700 text-sm leading-4">
              © Motoniq. All rights reserved.
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            {/* Email */}
            <Link
              href="mailto:contact@motoniq.ai"
              className="group flex items-center gap-2 rounded-lg px-0 py-2"
            >
              <Image
                src="/icons/email.svg"
                alt="Email"
                width={14}
                height={14}
                className="invert"
              />
              <span className="text-mono-800 text-sm leading-4 transition-all duration-200 group-hover:[text-shadow:_0.3px_0_0_currentColor,_-0.3px_0_0_currentColor]">
                contact@motoniq.ai
              </span>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/company/motoniq"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg py-2 pr-4"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={14}
                height={14}
                className="invert"
              />
              <span className="text-mono-800 text-sm leading-4 transition-all duration-200 group-hover:[text-shadow:_0.3px_0_0_currentColor,_-0.3px_0_0_currentColor]">
                Linkedin
              </span>
              <Image
                src="/icons/arrow-external.svg"
                alt=""
                width={7}
                height={7}
              />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
