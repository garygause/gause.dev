import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { revalidateTag } from 'next/cache';

import { deleteProject, getProject, updateProject } from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const project = await getProject(id);
    const response: ApiResponse = {
      msg: ['Success.'],
      success: true,
      data: project,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to retrieve Project.'],
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
      title,
      stack,
      keywords,
      imageSrc,
      imageHeight,
      imageWidth,
      imageAlt,
      summary,
      description,
      featured,
      status,
      slug,
      shares,
    } = await req.json();
    let update = {
      title,
      stack,
      keywords,
      imageSrc,
      imageHeight,
      imageWidth,
      imageAlt,
      summary,
      description,
      featured,
      status,
      slug,
      shares,
    };
    update.slug = slug.toLowerCase();
    const updatedProject = updateProject({ _id: id }, update);
    revalidateTag('project');
    revalidateTag('projects');

    const response: ApiResponse = {
      msg: ['Project updated.'],
      success: true,
      data: updatedProject,
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
        msg: ['Unable to save Project.'],
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
    await deleteProject(params.id);
    revalidateTag('projects');

    const response: ApiResponse = {
      msg: ['Project deleted.'],
      success: true,
      data: null,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to delete Project.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
