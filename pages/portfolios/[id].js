import Head from "next/head";

import Layout from "../../components/layout";
import ProjectCard from "../../components/project-card";

import { getAllProjectIds, getProjectData } from "../../lib/projects";

export default function Project({ projectData }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <Layout>
        <ProjectCard project={projectData} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = await getAllProjectIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
