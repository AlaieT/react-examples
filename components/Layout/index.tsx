import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

const Layout = ({ children }: React.PropsWithChildren) => {
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
      {children}
    </>
  );
};

export default Layout;
