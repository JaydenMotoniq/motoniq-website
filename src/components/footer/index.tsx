import Image from "next/image";
import Link from "next/link";

import { Marquee } from "@/components/marquee";

export const Footer = () => {
  return (
    <div className="flex flex-col">
      {/* Marquee Tape */}
      <Marquee
        repeat={8}
        className="bg-primary text-mono-800 py-1.5 font-(family-name:--font-proto-mono) text-sm tracking-tight uppercase [--duration:20s] [--gap:2rem]"
      >
        <span>•</span>
        <span>The Full-Stack Data Collection System</span>
      </Marquee>

      <footer className="bg-mono-800 px-64 py-16">
        {/* Menu Card */}
        <div className="bg-primary flex items-end justify-between rounded-2xl p-8">
          {/* Left side - Logo and metadata */}
          <div className="flex flex-1 flex-col gap-10">
            <div className="flex flex-col gap-6">
              <Image
                src="/icons/logo.svg"
                alt="Motoniq"
                width={166}
                height={24}
              />
              <p className="text-mono-700 text-base leading-5">
                The Data Engine for Physical Ai
              </p>
            </div>
            <p className="text-mono-700 text-sm leading-4">
              © Motoniq. All rights reserved
            </p>
          </div>

          {/* Right side - Links */}
          <div className="flex items-center gap-4">
            {/* Email */}
            <Link
              href="mailto:contact@motoniq.ai"
              className="flex items-center gap-2 rounded-lg px-0 py-2"
            >
              <Image
                src="/icons/email.svg"
                alt="Email"
                width={14}
                height={14}
                className="invert"
              />
              <span className="text-mono-800 text-sm leading-4">
                contact@motoniq.ai
              </span>
            </Link>

            {/* X (Twitter) */}
            <Link
              href="https://x.com/motoniq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg py-2 pr-4"
            >
              <Image
                src="/icons/x.svg"
                alt="X"
                width={14}
                height={14}
                className="invert"
              />
              <span className="text-mono-800 text-sm leading-4">
                X (Twitter)
              </span>
              <Image
                src="/icons/arrow-external.svg"
                alt=""
                width={7}
                height={7}
              />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/company/motoniq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg py-2 pr-4"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn"
                width={14}
                height={14}
                className="invert"
              />
              <span className="text-mono-800 text-sm leading-4">Linkedin</span>
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
