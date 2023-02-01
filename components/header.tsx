import Link from "next/link";

import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link href={"/"}>
            <a className={styles.logo}>
              <span>time to grow up</span>
            </a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
