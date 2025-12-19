'use server';
import { authSchema } from '~/schemas/auth';
import { signIn, signOut  } from '../../server/auth'
import { db } from '~/server/db';
import bcrypt from 'bcryptjs';

export const login = async (data: { email: string; password: string }) => {
    return signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/dashboard",
        redirect: false,
    });
}

export const signup = async (email: string, password: string) => {
    const isValid = authSchema.safeParse({ email, password });

    if (!isValid.success) {
        return { error: 'Invalid input' };
    }

    const user = await db.user.findUnique({
        where: { email: isValid.data.email },
    });

    if (user) {
        return { error: 'User already exists' };
    }

    const hash = await bcrypt.hash(isValid.data.password, 10);

    await db.user.create({
        data: {
            email: isValid.data.email,
            password: hash,
        },
    });

    return { success: true };
    
}

export const logout = async () => {
    return signOut();
}