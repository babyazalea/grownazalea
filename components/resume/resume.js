import Introduction from "./introduction";
import Profile from "./profile";
import Projects from "./projects";
import Skills from "./skills";

import styles from "../../styles/resume.module.css";

export default function Resume() {
  return (
    <div className={styles.resume}>
      <Profile />
      <Introduction />
      <Skills />
      <Projects />
    </div>
  );
}
