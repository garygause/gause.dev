import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import mongoose from 'mongoose';

import {
  createLibraryImage,
  getLibraryImages,
  searchLibraryImages,
} from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function POST(req: NextRequest) {
  let { title, credit, keywords, alt, path, width, height, size, status } =
    await req.json();

  try {
    const post = await createLibraryImage({
      title,
      credit,
      keywords,
      alt,
      path,
      width,
      height,
      size,
      status,
    });
    revalidateTag('library-images');

    const response: ApiResponse = {
      msg: ['LibraryImage created.'],
      success: true,
      data: post,
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
        msg: ['Unable to create LibraryImage.'],
        success: false,
        data: null,
      };
      return NextResponse.json(response);
    }
  }
}

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;
  try {
    if (params.get('published')) {
      const images = await searchLibraryImages({ status: 'published' });
      const response: ApiResponse = {
        msg: ['Success'],
        success: true,
        data: images,
      };
      return NextResponse.json(response);
    }
    const images = await getLibraryImages();
    const response: ApiResponse = {
      msg: ['Success'],
      success: true,
      data: images,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to retrieve LibraryImages.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
