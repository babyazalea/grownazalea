import { MDXRemote } from "next-mdx-remote";
import { MdxResource } from "../../types/types";

import styles from "../../styles/career.module.css";

type DevelopmentExperienceProps = {
  developmentExperienceData: MdxResource;
};

export default function DevelopmentExperience({
  developmentExperienceData,
}: DevelopmentExperienceProps) {
  return (
    <div className={styles.career}>
      <h2>개발 경험</h2>
      <hr />
      <MDXRemote {...developmentExperienceData.mdxSource} />
    </div>
  );
}
