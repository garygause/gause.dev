import { NextRequest, NextResponse } from 'next/server';

import mongoose from 'mongoose';

import { connectDB } from '../../lib/mongodb';
import Project from '@/app/models/project';

export async function POST(req: NextRequest) {
  const { _id, title, stack, description } = await req.json();
  try {
    await connectDB();
    await Project.create({ title, stack, description });
    return NextResponse.json({ msg: ['Project saved.'], success: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      return NextResponse.json({
        msg: 'Unable to save Project.',
        success: false,
      });
    }
  }
}

export async function GET(req: NextRequest) {
  //const { _id, title, stack, description } = await req.json();
  try {
    await connectDB();
    const projects = await Project.find();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({
      msg: 'Unable to retrieve Projects.',
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
