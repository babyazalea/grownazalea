import Head from "next/head";

import Layout from "../components/layout";
import Resume from "../components/resume/resume";

import { getAllProjectData } from "../lib/projects";

export default function Home({ allProjectsData }) {
  const filterOutName = [
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

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <Layout>
        <Resume allProjectsData={representativeProjects} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allProjectsData = await getAllProjectData();
  return {
    props: {
      allProjectsData,
    },
  };
}
