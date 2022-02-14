import Layout from "../../components/layout";

import { getAllProjectIds, getProjectData } from "../../lib/projects";

import styles from "../../styles/project.module.css";

export default function Portfolio({ projectData }) {
  return (
    <Layout isProjectPage>
      <div className={styles.projectWrapper}>
        <div className={styles.projectInfo}>
          <span>{projectData.title}</span>
          <span>{projectData.date}</span>
          <ul>
            {projectData.skills.split(",").map((skill) => (
              <li key={skill}>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
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
