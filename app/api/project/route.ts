import { NextRequest, NextResponse } from 'next/server';

import mongoose from 'mongoose';

import { createProject, getProjects } from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function POST(req: NextRequest) {
  const { title, stack, description } = await req.json();
  try {
    const project = await createProject({ title, stack, description });
    const response: ApiResponse = {
      msg: ['Project created.'],
      success: true,
      data: project,
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
        msg: ['Unable to create Project.'],
        success: false,
        data: null,
      };
      return NextResponse.json(response);
    }
  }
}

export async function GET(req: NextRequest) {
  try {
    const projects = await getProjects();
    const response: ApiResponse = {
      msg: ['Success'],
      success: true,
      data: projects,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to retrieve Projects.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
