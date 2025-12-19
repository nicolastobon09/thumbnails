"use server"

import Link from "next/link";
import { Button } from "~/components/ui/button";
import SignOut from "~/components/signout";
import Credits from "~/components/credits";


export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen flex-col items-center overflow-y-scroll p-6">
        <nav className="flex w-full items-center justify-between pb-6">
            <div className="flex gap-4 w-full items-center justify-end">
                <Credits />
                <Link href="/dashboard/pricing">
                    <Button>Buy More Credits</Button>
                </Link>
                <SignOut />
            </div>
        </nav>
        {children}
    </div>
  );
}
