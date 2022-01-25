import { useEffect } from "react";
import styles from "../../styles/projects.module.css";

export default function Projects({ projects }) {
  // useEffect(() => {
  //   console.log(projects);
  // }, [projects]);

  return (
    <div className={styles.projects}>
      <span>projects</span>
      <ul>
        {projects.map(({ id, title, date, skills, description }) => (
          <li key={id}>
            <span>{title}</span>
            <span>{date}</span>
            <span>{skills}</span>
            <span>{description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
