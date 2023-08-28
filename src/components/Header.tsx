import { FlexBoxContainer, Heading, UserProfile } from "@/components";
export const Header = () => {
  return (
    <FlexBoxContainer className="justify-center text-4xl items-center  bg-white w-full border-b">
      <Heading
        className="text-blue-600 w-full text-center py-4 font-bold text-5xl"
        text="Welcome to Task Manager"
      />
      <UserProfile />
    </FlexBoxContainer>
  );
};
