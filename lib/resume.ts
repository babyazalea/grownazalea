import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const resumeDirectory = path.join(process.cwd(), "resume");

export async function getAllResumeData() {
  const fileNames = fs.readdirSync(resumeDirectory);
  const allResumeData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(resumeDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");

      const { data, content } = matter(fileContents);

      const mdxSource = await serialize(content);

      return {
        id,
        ...data,
        mdxSource,
      };
    })
  );

  return allResumeData;
}
