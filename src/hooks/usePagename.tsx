import { useRouter } from "next/router";

export const usePagename = () => {
  const router = useRouter();
  const { pathname } = router;

  const pageName: string = pathname.split("/").pop() ?? "";

  return { pageName };
};
