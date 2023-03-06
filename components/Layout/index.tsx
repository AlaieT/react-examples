import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";

import styles from "../../styles/components/layout.module.scss";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const Layout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();

  const getBaseRoute = (name: string): boolean => {
    return router.pathname.includes(name);
  };

  return (
    <>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          outline: none;
          margin: 0;
          padding: 0;
        }

        html {
          width: 100%;
          height: 100%;

          font-family: ${roboto.style.fontFamily};
          font-size: 14px;
          font-weight: 300;
        }

        body,
        div[id="__next"] {
          width: 100%;
          height: 100%;
        }
      `}</style>
      <header id={styles.global_header}>
        <div className={styles.left}>
          <Image
            src="/icon_react.svg"
            width={24}
            height={24}
            alt="react icon"
          />
          <Link href={"/"}>React.Examples</Link>
        </div>
        <div className={styles.right}>
          <nav>
            <Link
              href={"/introdution"}
              className={getBaseRoute("/introduction") && styles.active}
            >
              Introduction
            </Link>
            <Link
              href={"/examples/basic"}
              className={getBaseRoute("/examples/basic") && styles.active}
            >
              Basic
            </Link>
            <Link
              href={"/examples/advanced"}
              className={getBaseRoute("/examples/advanced") && styles.active}
            >
              Advanced
            </Link>
          </nav>
        </div>
      </header>
      <main id={styles.global_main}>{children}</main>
    </>
  );
};

export default Layout;
