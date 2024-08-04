import Introduction from "./introduction";
import Profile from "./profile";
import Projects from "./projects";
import Skills from "./skills";

import styles from "../../styles/resume.module.css";
import { MdxResource, ProjectMdxResource } from "../../types/types";
import Career from "./career";

type ResumeProps = {
  introductionData: MdxResource;
  careerData: MdxResource;
  skillsData: MdxResource;
  allProjectsData: ProjectMdxResource[];
};

export default function Resume({
  introductionData,
  careerData,
  skillsData,
  allProjectsData,
}: ResumeProps) {
  return (
    <div className={styles.resume}>
      <Profile />
      <Introduction introductionData={introductionData} />
      <Skills skillsData={skillsData} />
      <Career careerData={careerData} />
      <Projects projects={allProjectsData} />
    </div>
  );
}
