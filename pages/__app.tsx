import React from "react";
import { Roboto } from "next/font/google";

import { AppProps } from "next/app";

import "../styles/global.scss";

const roboto = Roboto({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
