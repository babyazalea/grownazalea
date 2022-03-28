import Head from "next/head";

import Layout from "../../components/layout";
import Projects from "../../components/resume/projects";

import { getAllProjectData } from "../../lib/projects";

export default function Portfolios({ allProjectsData }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <Layout>
        <Projects projects={allProjectsData} />
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
