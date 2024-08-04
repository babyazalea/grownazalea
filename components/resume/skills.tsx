import { MDXRemote } from "next-mdx-remote";
import { MdxResource } from "../../types/types";
import styles from "../../styles/skills.module.css";

type SkillsProps = {
  skillsData: MdxResource;
};

export default function Skills({ skillsData }: SkillsProps) {
  return (
    <div className={styles.skills}>
      <h2 className={styles["skills-title"]}>쓰고 있는 기술들</h2>
      <hr />
      <MDXRemote {...skillsData.mdxSource} />
    </div>
  );
}
