import Head from "next/head";
import Header from "./header";

import styles from "../styles/layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Head>
        <title>grownazalea</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
}
