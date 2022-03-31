import { MDXRemote } from "next-mdx-remote";
import styles from "../../styles/introduction.module.css";

export default function Introduction({ introductionData }) {
  return (
    <div className={styles.introduction}>
      <h2>짧은 자기소개</h2>
      <hr />
      <MDXRemote {...introductionData.mdxSource} />
    </div>
  );
}
