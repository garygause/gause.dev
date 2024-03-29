import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { revalidateTag } from 'next/cache';

import {
  deletePost,
  getPost,
  updatePost,
  getLibraryImage,
} from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    let post = await getPost(id);
    if (post.libraryImage) {
      post.libraryImageData = await getLibraryImage(post.libraryImage);
    }
    const response: ApiResponse = {
      msg: ['Success.'],
      success: true,
      data: post,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to retrieve Post.'],
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
      author,
      keywords,
      summary,
      content,
      libraryImage,
      slug,
      featured,
      status,
      shares,
    } = await req.json();
    let update = {
      title,
      author,
      keywords,
      summary,
      content,
      libraryImage,
      slug,
      featured,
      status,
      shares,
    };
    update.slug = slug.toLowerCase();
    const updatedPost = updatePost({ _id: id }, update);
    revalidateTag('post');
    revalidateTag('posts');

    const response: ApiResponse = {
      msg: ['Post updated.'],
      success: true,
      data: updatedPost,
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
        msg: ['Unable to save Post.'],
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
    await deletePost(params.id);
    revalidateTag('posts');

    const response: ApiResponse = {
      msg: ['Post deleted.'],
      success: true,
      data: null,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to delete Post.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
