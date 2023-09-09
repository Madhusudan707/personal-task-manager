import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut, User } from "firebase/auth";
import { app } from "../../firebaseConfig";
import { useRouter } from "next/router";

type firebaseUserProps = {
  user: User | null | undefined;
  loading: boolean;
  logout: () => Promise<void>;
};

export const useFirebaseUser = (): firebaseUserProps => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
      setLoading(false); // Set loading to false when done fetching
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    const auth = getAuth(app);
    await signOut(auth);
    router.push("/");
  };

  return { user, loading, logout };
};
