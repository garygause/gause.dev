import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { revalidateTag } from 'next/cache';

import {
  deleteLibraryImage,
  getLibraryImage,
  updateLibraryImage,
} from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const image = await getLibraryImage(id);
    const response: ApiResponse = {
      msg: ['Success.'],
      success: true,
      data: image,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to retrieve LibraryImage.'],
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
    const { title, credit, keywords, alt, path, width, height, size, status } =
      await req.json();
    let update = {
      title,
      credit,
      keywords,
      alt,
      path,
      width,
      height,
      size,
      status,
    };
    const updatedLibraryImage = updateLibraryImage({ _id: id }, update);
    revalidateTag('library-image');
    revalidateTag('library-images');

    const response: ApiResponse = {
      msg: ['LibraryImage updated.'],
      success: true,
      data: updatedLibraryImage,
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
        msg: ['Unable to save LibraryImage.'],
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
    await deleteLibraryImage(params.id);
    revalidateTag('library-images');

    const response: ApiResponse = {
      msg: ['LibraryImage deleted.'],
      success: true,
      data: null,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to delete LibraryImage.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
