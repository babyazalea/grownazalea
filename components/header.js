import Link from "next/link";

import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={`nav ${styles.custom__nav}`}>
        <div className="nav-center tabs">
          <Link href="/">
            <a className="active">resume</a>
          </Link>
          <Link href="/portfolio">
            <a>portfolio</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
