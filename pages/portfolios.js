import { Fragment } from "react";
import Head from "next/head";

import Layout from "../components/layout";
import Resume from "../components/resume/resume";

import { getSortedProjectsData } from "../lib/projects";

export default function Portfolios({ allProjectsData }) {
  return (
    <Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <Layout>
        <p>this portfolios page</p>
      </Layout>
    </Fragment>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
