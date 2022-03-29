import Introduction from "./introduction";
import Profile from "./profile";
import Projects from "./projects";
import Skills from "./skills";

import styles from "../../styles/resume.module.css";

export default function Resume({
  introductionData,
  skillsData,
  allProjectsData,
}) {
  return (
    <div className={styles.resume}>
      <Profile />
      <Introduction introductionData={introductionData} />
      <Skills skillsData={skillsData} />
      <Projects projects={allProjectsData} />
    </div>
  );
}
