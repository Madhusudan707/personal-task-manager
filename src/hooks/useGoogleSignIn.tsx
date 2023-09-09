import { useState } from "react";
import { firebase } from "../../firebaseConfig";
import { useRouter } from "next/router";

export const useGoogleSignIn = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [signInError, setSignInError] = useState<string | null>(null);
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    setIsSigningIn(true);
    setSignInError(null);

    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const response = await firebase.auth().signInWithPopup(provider);
      if (response) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      setSignInError("An error occurred during sign-in.");
    } finally {
      setIsSigningIn(false);
    }
  };

  return {
    isSigningIn,
    signInError,
    handleGoogleSignIn,
  };
};

export default useGoogleSignIn;
