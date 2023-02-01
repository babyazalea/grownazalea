import { MDXRemote } from "next-mdx-remote";
import styles from "../../styles/introduction.module.css";
import { MdxResource } from "../../types/types";

type IntroductionProps = {
  introductionData: MdxResource;
};

export default function Introduction({ introductionData }: IntroductionProps) {
  return (
    <div className={styles.introduction}>
      <h2>짧은 자기소개</h2>
      <hr />
      <MDXRemote {...introductionData.mdxSource} />
    </div>
  );
}
