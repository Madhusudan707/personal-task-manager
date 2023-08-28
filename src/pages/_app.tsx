import { NextComponentType } from "next";
import { AppProps } from "next/app";

import { AuthProvider } from "@/contexts/";
import "globals.css";

// ...

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: NextComponentType }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
