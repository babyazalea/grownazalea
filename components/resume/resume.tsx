import { MdxResource, ProjectMdxResource } from "../../types/types";

import Profile from "./profile";
import Introduction from "./introduction";
import IfYouHireMe from "./if-you-hire-me";
import Career from "./career";
import Skills from "./skills";
import Projects from "./projects";

import styles from "../../styles/resume.module.css";

type ResumeProps = {
  introductionData: MdxResource;
  IfYouHireMeData: MdxResource;
  careerData: MdxResource;
  skillsData: MdxResource;
  allProjectsData: ProjectMdxResource[];
};

export default function Resume({
  introductionData,
  IfYouHireMeData,
  careerData,
  skillsData,
  allProjectsData,
}: ResumeProps) {
  return (
    <div className={styles.resume}>
      <Profile />
      <Introduction introductionData={introductionData} />
      <IfYouHireMe IfYouHireMeData={IfYouHireMeData} />
      <Career careerData={careerData} />
      <Skills skillsData={skillsData} />
      <Projects projects={allProjectsData} />
    </div>
  );
}
