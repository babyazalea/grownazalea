import cardStyles from "../styles/card.module.css";
import styles from "../styles/project-card.module.css";
import getSkillIconColor from "../lib/skill-icons";

export default function ProjectCard(props) {
  return (
    <div className={cardStyles.card}>
      <div>
        <span>{props.title}</span>
        <span>{props.date}</span>
      </div>
      <div>
        <span>{props.description}</span>
      </div>
      <div>
        <ul className={styles.skillListUl}>
          {props.skills.map((skill) => (
            <li className={styles.skillListItem} key={skill}>
              <img
                src={`https://img.shields.io/badge/${skill}-555555?style=flat&logo=${skill}&logoColor=${getSkillIconColor(
                  skill
                )}`}
                alt="Skill Icon"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
