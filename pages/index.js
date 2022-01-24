import Layout from "../components/layout";
import Resume from "../components/resume/resume";

import { getSortedProjectsData } from "../lib/projects";

export default function Home({ allProjectsData }) {
  return (
    <Layout>
      <Resume allProjectsData={allProjectsData} />
    </Layout>
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
