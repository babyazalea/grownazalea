import { MDXRemoteProps } from "next-mdx-remote";
import ProjectCard from "../project-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/projects.module.css";

type ProjectsProps = {
  projects: {
    id: string;
    mdxSource: MDXRemoteProps;
    title: string;
    date: string;
    skills: string;
    description: string;
    githubUrl1: string;
    githubUrl2?: string;
    serviceUrl: string;
    isDeprecated: string;
    announcement?: string;
  }[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className={styles.projects}>
      <div className={styles.projectsHeader}>
        <h2>대표적인 프로젝트</h2>
        <a href="https://drive.google.com/file/d/1jgfVi_4bC1kpdkPz4gc8XFNsIsPlxMVQ/view?usp=sharing">
          <span>더 자세히 보기</span>
          <FontAwesomeIcon icon={faLink as IconProp} size="xs" />
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
