import Link from "next/link";

import Layout from "../../components/layout";

import { getAllProjectData } from "../../lib/projects";

import styles from "../../styles/portfolios.module.css";

export default function Portfolios({ allProjectsData }) {
  return (
    <Layout>
      <div className={styles.portfolioList}>
        <ul>
          {allProjectsData.map((projectData) => (
            <li key={projectData.id}>
              <Link href={`/portfolios/${projectData.id}`}>
                {projectData.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjectsData = getAllProjectData();

  return {
    props: {
      allProjectsData,
    },
  };
}
