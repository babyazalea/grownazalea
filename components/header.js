import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className="logo">grownazalea</div>
        <div className={styles.menus}>
          <ul>
            <li>
              <Link href={"/"}>resume</Link>
            </li>
            <li>
              <Link href="/portfolio">portfolio</Link>
            </li>
            <li>
              <a href="https://github.com/babyazalea">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
