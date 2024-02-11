import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

import { getUser, updateUser, deleteUser } from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';
import { hashPassword } from '@/app/lib/password';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const user = await getUser(id);
    const response: ApiResponse = {
      msg: ['Success'],
      success: true,
      data: user,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to retrieve User.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const {
      name,
      email,
      password,
    }: { name: string; email: string; password?: string } = await req.json();
    let update = { name, email, password };
    if (password) {
      const hashedPassword: string = await hashPassword(password);
      update.password = hashedPassword;
    } else {
      delete update.password;
    }
    const updatedUser = await updateUser(id, update);
    const response: ApiResponse = {
      msg: ['User updated.'],
      success: true,
      data: updatedUser,
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

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await deleteUser(params.id);
    const response: ApiResponse = {
      msg: ['User deleted.'],
      success: true,
      data: null,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to delete User.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
