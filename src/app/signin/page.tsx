"use server";

import { redirect } from "next/navigation";
import SignIn from "~/components/signin";
import { auth } from "~/server/auth";

const Page = async () => {
  const session = await auth();
  if (session?.user) {
   redirect("/dashboard");
  }

  return <> <SignIn /></>;
};

export default Page;