import { Fragment } from "react";
import Head from "next/head";

import Layout from "../components/layout";
import Resume from "../components/resume/resume";

import { getData } from "../lib/projects";

export default function Home({ allProjectsData }) {
  console.log(allProjectsData);

  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <Layout>
        <div></div>
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps() {
  const allProjectsData = await getData();
  return {
    props: {
      allProjectsData,
    },
  };
}
