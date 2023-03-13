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

  return (
    <>
      <style jsx global>
        {`
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

          a {
            text-decoration: none;
          }
        `}
      </style>
      <header id={styles.global_header}>
        <Link href={"/"} id={styles.left}>
          <Image
            src="/icon_react.svg"
            width={24}
            height={24}
            alt="react icon"
          />
          <span>React.Examples</span>
        </Link>
        <div id={styles.right}>
          <nav>
            <Link
              href={"/home"}
              className={router.pathname === "/home" ? styles.active : null}
            >
              Home
            </Link>
            <Link
              href={"/introduction"}
              className={router.pathname !== "/home" ? styles.active : null}
            >
              Examples
            </Link>
          </nav>
        </div>
      </header>
      <main id={styles.global_main}>{children}</main>
      <footer id={styles.global_footer}>
        <a
          href="https://github.com/AlaieT/react-examples"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            src={"/icon_github.svg"}
            width={48}
            height={48}
            alt="github icon"
          />
        </a>
      </footer>
    </>
  );
};

export default Layout;
