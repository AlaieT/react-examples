import React from "react";

import styles from "../../styles/components/exampleContainer.module.scss";

const ExampleContainer = ({ children }: React.PropsWithChildren) => {
  return <div id={styles.container}>{children}</div>;
};

export default ExampleContainer;
