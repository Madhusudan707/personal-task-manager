import { useEffect } from "react";
import Head from "next/head";

export function usePageTitle(pageTitle: string) {
  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);
}

// Usage: usePageTitle('Your Dynamic Page Title');
