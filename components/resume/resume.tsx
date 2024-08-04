import Introduction from "./introduction";
import Profile from "./profile";
import Projects from "./projects";
import Skills from "./skills";

import styles from "../../styles/resume.module.css";
import { MdxResource, ProjectMdxResource } from "../../types/types";
import Career from "./career";
import DevelopmentExperience from "./development-experience";

type ResumeProps = {
  introductionData: MdxResource;
  developmentExperienceData: MdxResource;
  careerData: MdxResource;
  skillsData: MdxResource;
  allProjectsData: ProjectMdxResource[];
};

export default function Resume({
  introductionData,
  developmentExperienceData,
  careerData,
  skillsData,
  allProjectsData,
}: ResumeProps) {
  return (
    <div className={styles.resume}>
      <Profile />
      <Introduction introductionData={introductionData} />
      <DevelopmentExperience
        developmentExperienceData={developmentExperienceData}
      />
      <Career careerData={careerData} />
      <Skills skillsData={skillsData} />
      <Projects projects={allProjectsData} />
    </div>
  );
}
