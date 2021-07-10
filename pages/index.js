import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dilshod Next App</title>
        <meta name="description" content="Created by Dilshod Turabov" />
      </Head>
        <h1> Today I learn gitHub pull and push! </h1>
    </div>
  );
}
