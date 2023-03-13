import React from "react";

import Button from "../../examples/Button";
import ExampleLayout from "../../components/ExampleLayout";
import ExampleContainer from "../../components/ExampleContainer";

import styles from "../../styles/pages/example.module.scss";

const ButtonPage = () => {
  return (
    <ExampleLayout pageNav={[]}>
      <div id={styles.title}>
        <h1>Button</h1>
        <p>
          Buttons allow users to take actions, and make choices, with a single
          tap.
        </p>
      </div>
      <ExampleContainer>
        <Button>Default Button</Button>
        <Button type="reset">Reset Button</Button>
        <Button type="submit">Submit Button</Button>
      </ExampleContainer>
      <div className={styles.section}>
        <section>
          <h2></h2>
          <p>
            <code></code>
          </p>
        </section>
      </div>
    </ExampleLayout>
  );
};

export default ButtonPage;
