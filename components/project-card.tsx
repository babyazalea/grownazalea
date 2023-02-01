import SkillIcon from "./skill-icon";

import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlay, fa1, fa2 } from "@fortawesome/free-solid-svg-icons";

import cardStyles from "../styles/card.module.css";
import styles from "../styles/project-card.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ProjectMdxResource } from "../types/types";

type ProjectCardProps = {
  project: ProjectMdxResource;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={`${cardStyles.card} ${styles.projectCard}`}>
      <div className={styles.projectCardLabel}>
        <span className={styles.projectCardTitle}>{project.title}</span>
        <span className={styles.projectCardDate}>{project.date}</span>
      </div>
      <div className={styles.projectCardDescription}>
        {project.mdxSource ? (
          <>
            <span style={{ marginLeft: "0.5rem" }}>{project.description}</span>
            <article className={styles.projectDetail}>
              <MDXRemote {...project.mdxSource} />
            </article>
          </>
        ) : (
          <span>{project.description}</span>
        )}
      </div>
      <div className={styles.projectCardTail}>
        <ul className={styles.skillListUl}>
          {project.skills.split(",").map((skill) => (
            <li className={styles.skillListItem} key={skill}>
              <SkillIcon skill={skill} />
            </li>
          ))}
        </ul>
        <div className={styles.projectLinks}>
          <a href={project.githubUrl1} className={styles.projectLinksGithub}>
            <span className={styles.githubIcon}>
              <FontAwesomeIcon icon={faGithub as IconProp} />
            </span>
            <span className={styles.githubIconText}>
              <FontAwesomeIcon icon={fa1 as IconProp} />
            </span>
          </a>
          {project.githubUrl2 && (
            <a href={project.githubUrl2} className={styles.projectLinksGithub}>
              <span className={styles.githubIcon}>
                <FontAwesomeIcon icon={faGithub as IconProp} />
              </span>
              <span className={styles.githubIconText}>
                <FontAwesomeIcon icon={fa2 as IconProp} />
              </span>
            </a>
          )}
          <a href={project.serviceUrl}>
            <span>
              <FontAwesomeIcon icon={faPlay as IconProp} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
