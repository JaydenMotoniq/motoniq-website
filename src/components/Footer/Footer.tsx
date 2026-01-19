import classes from "./Footer.module.scss";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Marquee from "@/components/ui/Marquee";
import { EmailForm } from "../IntroSection/EmailForm";

const links = [
  { title: "About", href: "#about" },
  { title: "Technology", href: "#technology" },
  { title: "Use Cases", href: "#useCases" },
  {
    title: "Partner with Us",
    href: "https://form.typeform.com/to/xymDjEjj",
    isExternal: true,
  },
];

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__wrapper}>
        <Marquee texts={["Where human expertise becomes robotic mastery"]} />
        <div className={classes.footer__header}>
          <div className={classes.footer__content}>
            <h3 className={classes.footer__title}>
              Join the frontier of Intelligent Motion
            </h3>
            <p className={classes.footer__text}>
              Be part of the first generation of motion-intelligent humanoids
              shaping the future of work.
            </p>

            <a
              href="https://form.typeform.com/to/xymDjEjj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="accent" text="Partner with us" type="button" />
            </a>
          </div>
        </div>
        <div className={classes.footer__formWrapper}>
          <EmailForm variant="horizontal" />
        </div>
        <div className={classes.footer__footer}>
          <div className={classes.footer__row}>
            <div className={classes.footer__info}>
              <Link href="/">
                <Image
                  width={165}
                  height={24}
                  alt="Motoniq"
                  src="/logo-light.svg"
                />
              </Link>
              <p>Motion Intelligence for Machines</p>
            </div>
            <nav className={classes.footer__nav}>
              {links.map(({ href, title, isExternal }) =>
                !isExternal ? (
                  <Link
                    key={title}
                    href={href}
                    className={classes.footer__link}
                  >
                    {title}
                  </Link>
                ) : (
                  <a
                    key={title}
                    href={href}
                    className={classes.footer__link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </a>
                )
              )}
            </nav>
            <div className={classes.footer__contacts}>
              <p>Contact Us</p>
              <div className={classes.footer__socials}>
                <Link href="mailto:info@motoniq.ai">
                  <Image
                    src="/icons/email.svg"
                    width={14}
                    height={14}
                    alt="Email"
                  />
                  <p>info@motoniq.ai</p>
                </Link>
                <Link href="https://x.com/motoniq" target="_blank">
                  <Image src="/icons/x.svg" width={14} height={14} alt="X" />
                  <p>X (Twitter)</p>
                </Link>
                <Link href="https://linkedin.com/motoniq" target="_blank">
                  <Image
                    src="/icons/linkedin.svg"
                    width={14}
                    height={14}
                    alt="Linkedin"
                  />
                  <p>Linkedin</p>
                </Link>
              </div>
            </div>
          </div>
          <p className={classes.footer__rights}>
            © Motonic. All rights reserved
          </p>
        </div>
        <div className={classes.footer__grid}>
          {new Array(25).fill("").map((_, idx) => (
            <span key={idx} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
