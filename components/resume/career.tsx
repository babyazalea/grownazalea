import { MDXRemote } from "next-mdx-remote";
import styles from "../../styles/introduction.module.css";
import { MdxResource } from "../../types/types";

type IntroductionProps = {
  careerData: MdxResource;
};

export default function Career({ careerData }: IntroductionProps) {
  return (
    <div>
      <h2>이력</h2>
      <hr />
      <MDXRemote {...careerData.mdxSource} />
    </div>
  );
}
