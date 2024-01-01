import SkillIcon from "./skill-icon";

import { MDXRemote } from "next-mdx-remote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faAppStoreIos } from "@fortawesome/free-brands-svg-icons";
import { faPlay, fa1, fa2 } from "@fortawesome/free-solid-svg-icons";

import cardStyles from "../styles/card.module.css";
import styles from "../styles/project-card.module.css";
import { ProjectMdxResource } from "../types/types";

type ProjectCardProps = {
  project: ProjectMdxResource;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const deprecatedAlert = (message: string | undefined) => {
    alert(message ? message : "준비 중입니다. 다음에 다시 시도해주세요.");
  };

  return (
    <div className={`${cardStyles.card} ${styles.projectCard}`}>
      <div className={styles.projectCardLabel}>
        <div>
          <span className={styles.projectCardTitle}>{project.title}</span>
        </div>
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
        <div className={styles.projectLinksWrapper}>
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
              <a
                href={project.githubUrl2}
                className={styles.projectLinksGithub}
              >
                <span className={styles.githubIcon}>
                  <FontAwesomeIcon icon={faGithub as IconProp} />
                </span>
                <span className={styles.githubIconText}>
                  <FontAwesomeIcon icon={fa2 as IconProp} />
                </span>
              </a>
            )}
            {project.appStoreUrl && (
              <a href={project.appStoreUrl}>
                <span>
                  <FontAwesomeIcon icon={faAppStoreIos as IconProp} />
                </span>
              </a>
            )}
            {project.isDeprecated === "Y" ? (
              <a onClick={() => deprecatedAlert(project.announcement)}>
                <span>
                  <FontAwesomeIcon icon={faPlay as IconProp} />
                </span>
              </a>
            ) : (
              <a href={project.serviceUrl}>
                <span>
                  <FontAwesomeIcon icon={faPlay as IconProp} />
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
