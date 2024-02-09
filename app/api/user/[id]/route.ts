import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import { connectDB } from '@app/lib/mongodb';
import User from '@app/models/user';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  console.log('api: ' + params.id);
  try {
    await connectDB();
    const user = await User.findById(id);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
      msg: 'Unable to retrieve User.',
      success: false,
    });
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
      const hashedPassword: string = await bcrypt.hash(password, 10);
      update.password = hashedPassword;
    } else {
      delete update.password;
    }
    await connectDB();
    await User.findOneAndUpdate({ _id: id }, update);
    const updatedUser = await User.findById(id);
    return NextResponse.json({
      msg: ['User updated.'],
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList, success: false, user: null });
    } else {
      return NextResponse.json({
        msg: ['Unable to save User.'],
        success: false,
        user: null,
      });
    }
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    await User.findOneAndDelete({ _id: params.id });
    return NextResponse.json({
      msg: ['User deleted.'],
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      msg: ['Unable to delete User.'],
      success: false,
    });
  }
}
