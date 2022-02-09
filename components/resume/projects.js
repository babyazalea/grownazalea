import ProjectCard from "../project-card";

import styles from "../../styles/projects.module.css";

export default function Projects({ projects }) {
  return (
    <div className={styles.projects}>
      <h2>Projects</h2>
      <hr />
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
