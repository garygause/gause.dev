import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

import { createUser, getUsers } from '../../lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';
import { hashPassword } from '@/app/lib/password';

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();
  try {
    // TODO: validation is not working
    if (!password || !email || !name) {
      const response: ApiResponse = {
        msg: ['Required fields missing.'],
        success: false,
        data: null,
      };
      return NextResponse.json(response);
    }
    const hashedPassword = await hashPassword(password);
    const user = await createUser({ name, email, password: hashedPassword });
    const response: ApiResponse = {
      msg: ['User saved.'],
      success: true,
      data: user,
    };
    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      const response: ApiResponse = {
        msg: errorList,
        success: false,
        data: null,
      };
      return NextResponse.json(response);
    } else {
      const response: ApiResponse = {
        msg: ['Unable to save User.'],
        success: false,
        data: null,
      };
      return NextResponse.json(response);
    }
  }
}

export async function GET(req: NextRequest) {
  try {
    const users = await getUsers();
    const response: ApiResponse = {
      msg: ['Success'],
      success: true,
      data: users,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to retrieve Users.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
