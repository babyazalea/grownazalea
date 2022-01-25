import fs from "fs";
import path from "path";
import matter from "gray-matter";
// import { remark } from "remark";
// import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "projects");

export function getSortedProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    // const processedContent = remark()
    //   .use(html)
    //   .process(matterResult.content);
    // const contentHtml = processedContent.toString();

    return {
      id,
      // contentHtml,
      ...matterResult.data,
    };
  });

  return allProjectsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      0;
    }
  });
}
