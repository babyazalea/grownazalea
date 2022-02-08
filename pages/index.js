import { Fragment } from "react";
import Head from "next/head";

import Layout from "../components/layout";
import Resume from "../components/resume/resume";

import { getSortedProjectsData } from "../lib/projects";

import "https://unpkg.com/open-props";
import "https://unpkg.com/open-props/normalize.min.css";

export default function Home({ allProjectsData }) {
  return (
    <Fragment>
      <Head>
        <title>grownazalea</title>
        <link rel="stylesheet" href="https://unpkg.com/open-props" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/open-props/normalize.min.css"
        />
      </Head>
      <Layout>
        <Resume allProjectsData={allProjectsData} />
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
