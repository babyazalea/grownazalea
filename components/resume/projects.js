import { useEffect } from "react";
import styles from "../../styles/projects.module.css";

export default function Projects({ projects }) {
  return (
    <div className={styles.projects}>
      <span>projects</span>
      <ul>
        {projects.map(({ id, title, date }) => (
          <li key={id}>
            <span>{title}</span>
            <span>{date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
