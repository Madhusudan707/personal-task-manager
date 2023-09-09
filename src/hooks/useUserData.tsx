import { useEffect, useState } from "react";
import { firestore } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

type UserData = {
  name: string;
  email: string;
};

export const useUserData = (uid: string | null | undefined) => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (uid) {
        try {
          const userDocRef = doc(firestore, "Users", uid);
          const userDocSnapshot = await getDoc(userDocRef);

          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data() as UserData;
            setUserData(userData);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserData(null);
      }
    };

    fetchUserData();
  }, [uid]);

  return userData;
};
