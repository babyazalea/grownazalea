import SkillIcon from "./skill-icon";

import cardStyles from "../styles/card.module.css";
import styles from "../styles/project-card.module.css";

export default function ProjectCard(props) {
  return (
    <div className={`${cardStyles.card} ${styles.projectCard}`}>
      <div className={styles.projectCardLabel}>
        <span className={styles.projectCardTitle}>{props.title}</span>
        <span className={styles.projectCardDate}>{props.date}</span>
      </div>
      <div className={styles.projectCardDescription}>
        <span>{props.description}</span>
      </div>
      <div className={styles.projectCardSkills}>
        <ul className={styles.skillListUl}>
          {props.skills.map((skill) => (
            <li className={styles.skillListItem} key={skill}>
              <SkillIcon skill={skill} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
