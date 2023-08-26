import { MDXRemote } from "next-mdx-remote";
import { MdxResource } from "../../types/types";

import styles from "../../styles/career.module.css";

type IntroductionProps = {
  careerData: MdxResource;
};

export default function Career({ careerData }: IntroductionProps) {
  return (
    <div className={styles.career}>
      <h2>이력</h2>
      <hr />
      <MDXRemote {...careerData.mdxSource} />
    </div>
  );
}
