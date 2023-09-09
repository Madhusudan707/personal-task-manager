import { useEffect } from "react";
import { useRouter } from "next/router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthRedirect = (): void => {
  const router = useRouter();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("dashboard");
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [auth, router]);
};
