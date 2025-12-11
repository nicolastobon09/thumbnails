"use client";

import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./card";

const SignIn = () => {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col gap-4">
                <Link href="/" className="flex items-center gap-2">
                    <IoArrowBack className="h-4 w-4" />
                    <p className="leading-7">Go Back</p>
                </Link>
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle className="text-2xl">Sign In</CardTitle>
                        <CardDescription>
                            Enter your email and password to sign in to your account.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
};

export default SignIn;