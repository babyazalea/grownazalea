import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const resumeDirectory = path.join(process.cwd(), "resume");

// export async function getAllResumeData() {
//   const fullPath = path.join(resumeDirectory);
//   const fileContents = fs.readFileSync(fullPath, "utf8");

//   const matterResult = matter(fileContents);

//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content);
//   const contentHtml = processedContent.toString();

//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   };
// }

export async function getAllResumeData() {
  const fileNames = fs.readdirSync(resumeDirectory);
  const allResumeData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(resumeDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");

      const matterResult = matter(fileContents);

      const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
      const contentHtml = processedContent.toString();

      return {
        id,
        contentHtml,
        ...matterResult.data,
      };
    })
  );

  return allResumeData;
}
