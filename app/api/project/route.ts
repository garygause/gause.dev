import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import mongoose from 'mongoose';

import { createProject, getProjects } from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function POST(req: NextRequest) {
  let {
    title,
    stack,
    keywords,
    imageSrc,
    imageHeight,
    imageWidth,
    imageAlt,
    summary,
    description,
    slug,
    featured,
    status,
  } = await req.json();
  slug = slug.toLowerCase();
  try {
    const project = await createProject({
      title,
      stack,
      keywords,
      imageSrc,
      imageHeight,
      imageWidth,
      imageAlt,
      summary,
      description,
      slug,
      featured,
      status,
    });
    revalidateTag('projects');

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
