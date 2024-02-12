import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import mongoose from 'mongoose';

import { createPost, getPosts } from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function POST(req: NextRequest) {
  const { title, author, keywords, content } = await req.json();
  try {
    const post = await createPost({ title, author, keywords, content });
    revalidateTag('posts');

    const response: ApiResponse = {
      msg: ['Post created.'],
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
        msg: ['Unable to create Post.'],
        success: false,
        data: null,
      };
      return NextResponse.json(response);
    }
  }
}

export async function GET(req: NextRequest) {
  try {
    const posts = await getPosts();
    const response: ApiResponse = {
      msg: ['Success'],
      success: true,
      data: posts,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to retrieve Posts.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
