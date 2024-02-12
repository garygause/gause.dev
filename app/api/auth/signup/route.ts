import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

import { getUserByEmail, createUser } from '@/app/lib/mongodb';
import { hashPassword } from '@/app/lib/password';
import { ApiResponse } from '@/app/lib/definitions';

export async function POST(req: NextRequest) {
  const { name, email, password, role } = await req.json();

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    const response: ApiResponse = {
      msg: ['Unable to create User: Invalid input.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    const response: ApiResponse = {
      msg: ['Unable to create User: User already exists.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }

  const hashedPassword = await hashPassword(password);
  try {
    const user = await createUser({
      name: name,
      email: email,
      password: hashedPassword,
      role: role,
    });
    revalidateTag('users');

    const response: ApiResponse = {
      msg: ['Created User.'],
      success: true,
      data: user,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to create User.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
