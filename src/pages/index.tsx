import { GmailSignInButton } from "@/components";
export default function Home() {
  return (
    <main className="flex  justify-center items-center min-h-screen flex-col   bg-white w-full">
      <div className="flex flex-col items-center border-4 border-blue-500 rounded-md gap-y-4 p-8 w-2/3">
        <h1 className="w-full text-center  text-blue-600 text-4xl  p-8 rounded-md">
          Personal Task Manager 🚀
        </h1>
        <GmailSignInButton />
      </div>
    </main>
  );
}
