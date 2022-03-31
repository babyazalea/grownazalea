import { MDXRemote } from "next-mdx-remote";
import styles from "../../styles/skills.module.css";

export default function Skills({ skillsData }) {
  return (
    <div className={styles.skills}>
      <h2 className={styles["skills-title"]}>쓰고 있는 기술들</h2>
      <hr />
      <MDXRemote {...skillsData.mdxSource} />
    </div>
  );
}
