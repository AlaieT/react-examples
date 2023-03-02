import React from "react";
import Link from "next/link";

import styles from "../../styles/pages/home.module.scss";

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <p>
          <span>React.</span>Examples
        </p>
        <p>
          Make your journey in world of react simpler with a lot of real-life
          examples!
        </p>
      </div>
      <div className={styles.features}>
        <div className={styles.item}>
          <label>01.Simple</label>
          <p>Each of examples made as simple as possible.</p>
        </div>
        <div className={styles.item}>
          <label>02.Clean</label>
          <p>
            There is no external packages except react and testing-libraries.
          </p>
        </div>
        <div className={styles.item}>
          <label>03.Real</label>
          <p>Examples are made with a focus on real-life projects.</p>
        </div>
        <div className={styles.item}>
          <label>04.Informative</label>
          <p>We provide description and explanation for each of examples.</p>
        </div>
      </div>
      <div className={styles.start}>
        <Link href={"/examples/introduction"}>Gettin Started!</Link>
      </div>
    </main>
  );
};

export default Home;
