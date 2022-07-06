import Head from "next/head";

import Layout from "../components/layout";
import Resume from "../components/resume/resume";

import { getAllProjectData } from "../lib/projects";
import { getAllResumeData } from "../lib/resume";

export default function Home({ allResumeData, allProjectsData }) {
  const filterOutName = [
    "to-be-published",
    "asuwant",
    "burger-finder",
    "mongnokam",
    "time-to-grow-up",
    "tyange-blog",
    "wto",
    "longtime",
  ];

  const representativeProjects = allProjectsData.filter((project) =>
    filterOutName.includes(project.id)
  );

  const introductionData = allResumeData.find(
    (resumeData) => resumeData.id === "introduction"
  );

  const skillsData = allResumeData.find(
    (resumeData) => resumeData.id === "skills"
  );

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <Layout>
        <Resume
          introductionData={introductionData}
          skillsData={skillsData}
          allProjectsData={representativeProjects}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allResumeData = await getAllResumeData();
  const allProjectsData = await getAllProjectData();

  return {
    props: {
      allResumeData,
      allProjectsData,
    },
  };
}
