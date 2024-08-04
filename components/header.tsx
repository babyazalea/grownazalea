import Link from "next/link";

import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Link className={styles.logo} href={"/"} passHref>
            <span>time to grow up</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
