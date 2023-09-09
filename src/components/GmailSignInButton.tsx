import { Button } from "@/components";
import { useGoogleSignIn } from "@/hooks";
export const GmailSignInButton: React.FC = () => {
  const { isSigningIn, signInError, handleGoogleSignIn } = useGoogleSignIn();

  return (
    <Button
      className="bg-blue-600 text-white px-4 py-8 rounded-lg text-2xl"
      onClick={handleGoogleSignIn}
      label={""}
      active={false}
    >
      Sign In with Google
    </Button>
  );
};
