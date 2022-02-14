import Link from "next/link";

import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.menus}>
          <ul>
            <li>
              <Link href={"/"}>resume</Link>
            </li>
            <li>
              <Link href="/portfolios">portfolios</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
