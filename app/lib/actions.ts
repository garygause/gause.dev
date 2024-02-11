'use server';

import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';
import { revalidatePath, revalidateTag } from 'next/cache';
import { User } from '@/app/lib/definitions';
import { saveUser } from './api-client';

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

export async function saveUserForm(_id: string, formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const role = formData.get('role') as string;

  const user: User = {
    name: name,
    email: email,
    password: password,
    role: role,
  };

  const { msg, success } = await saveUser(user, _id);
  if (success) {
    revalidatePath('/admin/users');
    redirect('/admin/users');
  }
}
