"use server";

import { redirect } from "next/navigation";
import SignUp from "~/components/signup";
import { auth } from "~/server/auth";

const Page = async () => {
  const session = await auth();
  if (session?.user) {
   redirect("/dashboard");
  }

  return <> <SignUp /></>;
};

export default Page;