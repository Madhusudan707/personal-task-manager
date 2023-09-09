import { NextComponentType } from "next";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AuthProvider, DataFormProvider } from "@/contexts/";
import "globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: NextComponentType }) {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  // const pageName = router.state.route.split("/").pop();
  return (
    <AuthProvider>
      <DataFormProvider>
        <Component {...pageProps} pageName={pathname} />
      </DataFormProvider>
    </AuthProvider>
  );
}

export default MyApp;
