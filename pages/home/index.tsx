import React from "react";
import Link from "next/link";

import styles from "../../styles/pages/home.module.scss";

const Home = () => {
  return (
    <main className={styles.container}>
      <div className={styles.title}>
        <h1>
          <span>React.</span>Examples
        </h1>
        <h2>
          Make your journey in world of react simpler with a lot of real-life
          examples!
        </h2>
      </div>
      <div className={styles.features}>
        <section>
          <h3>Simple</h3>
          <p>Each of examples made as simple as possible.</p>
        </section>
        <section>
          <h3>Clean</h3>
          <p>
            There is no external packages except react and testing-libraries.
          </p>
        </section>
        <section>
          <h3>Real</h3>
          <p>Examples are made with a focus on real-life projects.</p>
        </section>
        <section>
          <h3>Informative</h3>
          <p>We provide description and explanation for each of examples.</p>
        </section>
      </div>
      <Link href={"/examples/introduction"} className={styles.start}>
        Getting Started!
      </Link>
    </main>
  );
};

export default Home;
