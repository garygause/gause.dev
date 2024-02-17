'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

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
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'An error occurred during authentication.';
      }
    }
    console.log(error);
    //throw error;
  }
}

export async function signOutUser() {
  await signOut();
}
