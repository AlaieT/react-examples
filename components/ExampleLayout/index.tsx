import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/components/exampleLayout.module.scss";

interface PageNav {
  name: string;
  ref: string;
}

interface SectionNav {
  base: string;
  routes: PageNav[];
}

interface ExampleLayoutProps {
  children?: React.ReactNode | undefined;
  pageNav?: PageNav[] | undefined;
}

const SECTIOIN_NAV: SectionNav[] = [
  {
    base: "GETTING STARTED",
    routes: [{ name: "Introduction", ref: "/introduction" }],
  },
  {
    base: "INPUTS",
    routes: [{ name: "Button", ref: "/button" }],
  },
];

const ExampleLayout = ({ children, pageNav }: ExampleLayoutProps) => {
  const router = useRouter();

  return (
    <>
      <div id={styles.section_nav}>
        <nav>
          <ul>
            {SECTIOIN_NAV.map(({ base, routes }) => (
              <li key={base}>
                <h3>{base}</h3>
                {routes.map(({ name, ref }) => (
                  <Link
                    key={base + name}
                    href={ref}
                    id={router.pathname === ref ? styles.active : null}
                  >
                    {name}
                  </Link>
                ))}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id={styles.content}>{children}</div>
      <div id={styles.page_nav}>
        <nav>
          <label>CONTENT</label>
          {pageNav?.map(({ name, ref }) => (
            <h4 key={ref}>
              <Link href={ref}>{name}</Link>
            </h4>
          ))}
        </nav>
      </div>
    </>
  );
};

export type { PageNav, ExampleLayoutProps };
export default ExampleLayout;
