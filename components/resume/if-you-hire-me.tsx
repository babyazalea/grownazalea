import { MDXRemote } from "next-mdx-remote";
import { MdxResource } from "../../types/types";

import styles from "../../styles/career.module.css";

type IfYouHireMeProps = {
  IfYouHireMeData: MdxResource;
};

export default function IfYouHireMe({ IfYouHireMeData }: IfYouHireMeProps) {
  return (
    <div className={styles.career}>
      <h2>저를 채용하시면...</h2>
      <hr />
      <MDXRemote {...IfYouHireMeData.mdxSource} />
    </div>
  );
}
