"use client";

import classes from "./Header.module.scss";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import MobileMenu from "../MobileMenu";
import { useState } from "react";

const links = [
  { title: "About", href: "#about" },
  { title: "Technology", href: "#technology" },
  { title: "Use Cases", href: "#useCases" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.header__body}>
        <Link href="/">
          <picture>
            <source
              srcSet="/logo-lg.svg"
              media="(width >= 768px)"
              width={154}
              height={30}
            />
            <Image src="/logo.svg" alt="Motoniq" width={19} height={16} />
          </picture>
        </Link>
        <nav className={classes.header__nav}>
          {links.map(({ href, title }) => (
            <Link key={title} href={href} className={classes.header__link}>
              {title}
            </Link>
          ))}
        </nav>
        <a
          href="https://form.typeform.com/to/xymDjEjj"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            className={classes.header__button}
            text="Partner with us"
            type="button"
          />
        </a>

        <button
          onClick={() => setMobileMenuOpen(true)}
          className={classes.header__burger}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      {mobileMenuOpen && (
        <MobileMenu links={links} onClose={() => setMobileMenuOpen(false)} />
      )}
    </header>
  );
};

export default Header;
