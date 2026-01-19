import classes from "./MobileMenu.module.scss";

import Link from "next/link";
import Image from "next/image";

type Props = { links: { title: string; href: string }[]; onClose: () => void };

const MobileMenu = ({ links, onClose }: Props) => {
  return (
    <div className={classes.mobileMenu}>
      <div className={classes.mobileMenu__header}>
        <Link href="/" onClick={onClose}>
          <Image src="/logo.svg" alt="Motoniq" width={19} height={16} />
        </Link>
        <button onClick={onClose} className={classes.mobileMenu__button}>
          <span />
          <span />
        </button>
      </div>
      <nav className={classes.mobileMenu__nav}>
        {links.map(({ href, title }) => (
          <Link
            key={title}
            href={href}
            onClick={onClose}
            className={classes.mobileMenu__link}
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
