"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { z } from "zod";
import { authSchema } from "~/schemas/auth";
import { login } from "~/app/actions/auth";
import { toast } from "sonner"
import { useRouter } from "next/navigation";

type FormValues = z.infer<typeof authSchema>;

const SignIn = () => {

    const router = useRouter();

    const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({
        resolver: zodResolver(authSchema),
    });

    const onSubmit = async (data: FormValues) => {
        try {
            const result = await login(data);
            if (result?.error) {
                toast.error('Wrong user/password')
            } else {
                router.push('/dashboard');
            }
        } catch (error) {
            toast.error('Something went wrong')
        }
        
    };

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input {...register("email")} id="email" type="email" placeholder="doe@example.com" />
                                {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input {...register("password")} id="password" type="password" />
                                {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col gap-2 mt-5">
                            <Button type="submit" className="w-full">Sign In</Button>
                            <p className="text-sm text-center text-muted-foreground">
                                Don't have an account?{" "}
                                <Link href="/signup" className="text-primary hover:underline">
                                    Sign Up
                                </Link>
                            </p>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default SignIn;