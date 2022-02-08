import ProjectCard from "../project-card";

// import { useEffect } from "react";
import styles from "../../styles/projects.module.css";

export default function Projects({ projects }) {
  // useEffect(() => {
  //   console.log(projects);
  // }, [projects]);

  return (
    <div className={styles.projects}>
      <span>projects</span>
      <ul className={styles.projectsCardUl}>
        {projects.map(({ id, title, date, skills, description }) => (
          <li className={styles.projectsCardLi} key={id}>
            <ProjectCard
              title={title}
              date={date}
              skills={skills.split(",")}
              description={description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
