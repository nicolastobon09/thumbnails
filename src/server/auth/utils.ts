'use server';
import { signIn  } from './index'

export const login = async (data: { email: string; password: string }) => {
    return signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/dashboard",
        redirect: false,
    });
}
