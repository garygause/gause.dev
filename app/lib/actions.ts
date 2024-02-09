'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { getSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    //await signIn('credentials', formData);
    const result = await signIn('credentials', {
      redirect: false,
      password: formData.get('password'),
      email: formData.get('email'),
    });
    console.log(result);
    console.log('actions: ');
    console.log(formData);
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    console.log(error);
    //throw error;
  }
}

export async function signOutUser() {
  await signOut();
}

export async function updateCacheAndRedirect(
  paths: string[],
  redirectPath: string
) {
  for (let path of paths) {
    revalidatePath(path);
  }
  redirect(redirectPath);
}
