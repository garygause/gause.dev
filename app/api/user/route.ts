import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import { connectDB } from '../../lib/mongodb';
import User from '@/app/models/user';

export async function POST(req: NextRequest) {
  const { name, email, password } = await req.json();
  try {
    // TODO: validation is not working
    if (!password || !email || !name) {
      return NextResponse.json({
        msg: ['Required fields missing.'],
        success: false,
        user: null,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectDB();
    const user = await User.create({ name, email, password: hashedPassword });
    return NextResponse.json({
      msg: ['User saved.'],
      success: true,
      user: user,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      return NextResponse.json({
        msg: ['Unable to save User.'],
        success: false,
        user: null,
      });
    }
  }
}

export async function GET(req: NextRequest) {
  try {
    await connectDB();
    const users = await User.find();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({
      msg: 'Unable to retrieve Users.',
      success: false,
    });
  }
}

// export const GET = auth((req) => {
//   if (req.auth) {
//     return Response.json({ data: 'Protected data' });
//   }

//   return Response.json({ message: 'Not authenticated' }, { status: 401 });
// }) as any; // TODO: Fix `auth()` return type
