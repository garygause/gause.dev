import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

import { connectDB } from '@/app/lib/mongodb';
import Project from '@/app/models/project';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    await connectDB();
    const project = await Project.findById(id);
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json({
      msg: 'Unable to retrieve Project.',
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
    const { title, stack, description } = await req.json();
    let update = { title, stack, description };
    await connectDB();
    await Project.findOneAndUpdate({ _id: id }, update);
    const updatedProject = await Project.findById(id);
    return NextResponse.json({
      msg: ['Project updated.'],
      success: true,
      project: updatedProject,
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
        msg: ['Unable to save Project.'],
        success: false,
        project: null,
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
    await Project.findOneAndDelete({ _id: params.id });
    return NextResponse.json({
      msg: ['Project deleted.'],
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      msg: ['Unable to delete Project.'],
      success: false,
    });
  }
}
