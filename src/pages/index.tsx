import { usePageTitle, usePagename } from "@/hooks";
import { GmailSignInButton, FlexBoxContainer, Heading } from "@/components";
export default function Home() {
  const { pageName } = usePagename();
  usePageTitle(pageName);
  return (
    <FlexBoxContainer className=" justify-center items-center min-h-screen flex-col   bg-white w-full">
      <FlexBoxContainer className="flex flex-col items-center border-4 border-blue-500 rounded-md gap-y-4 p-8 w-2/3">
        <Heading
          className="w-full text-center  text-blue-600 text-4xl  p-8 rounded-md"
          text="Personal Task Manager 🚀"
        />
        <GmailSignInButton />
      </FlexBoxContainer>
    </FlexBoxContainer>
  );
}
