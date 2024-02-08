import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

import { connectDB } from '@app/lib/mongodb';
import Project from '@app/models/project';

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
