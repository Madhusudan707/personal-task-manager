// GoogleSignInButton.tsx
import React from "react";
import firebase from "../../../firebaseConfig";
import { useRouter } from "next/router";
export const GmailSignInButton: React.FC = () => {
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      const response = await firebase.auth().signInWithPopup(provider);
      if (response) {
        router.push("/dashboard");
      }
      console.log(response);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <button
      className="bg-blue-600 text-white px-4 py-8 rounded-lg text-2xl"
      onClick={handleGoogleSignIn}
    >
      Sign In with Google
    </button>
  );
};
