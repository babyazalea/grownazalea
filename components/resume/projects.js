import ProjectCard from "../project-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/projects.module.css";

export default function Projects({ projects }) {
  return (
    <div className={styles.projects}>
      <div className={styles.projectsHeader}>
        <h2>대표적인 프로젝트</h2>
        <a href="https://drive.google.com/file/d/1jgfVi_4bC1kpdkPz4gc8XFNsIsPlxMVQ/view?usp=sharing">
          <span>더 자세히 보기</span>
          <FontAwesomeIcon icon={faLink} size="xs" />
        </a>
      </div>
      <hr />
      <ul className={styles.projectsCardUl}>
        {projects.map((project) => (
          <li className={styles.projectsCardLi} key={project.id}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
