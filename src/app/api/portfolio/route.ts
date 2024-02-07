import { NextRequest, NextResponse } from 'next/server';
import { auth } from 'auth';

import mongoose from 'mongoose';

import { connectDB } from '@lib/mongodb';
import Portfolio from '@/models/portfolio';

export async function POST(req: NextRequest) {
  const { title, description } = await req.json();
  try {
    await connectDB();
    await Portfolio.create({ title, description });

    return NextResponse.json({ msg: ['Portfolio saved.'], success: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      return NextResponse.json({
        msg: 'Unable to save Portfolio.',
        success: false,
      });
    }
  }
}

// export const GET = auth((req) => {
//   if (req.auth) {
//     return Response.json({ data: 'Protected data' });
//   }

//   return Response.json({ message: 'Not authenticated' }, { status: 401 });
// }) as any; // TODO: Fix `auth()` return type
