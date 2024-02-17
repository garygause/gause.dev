import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import mongoose from 'mongoose';

import { createPost, getPosts, searchPosts } from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function POST(req: NextRequest) {
  let {
    title,
    author,
    keywords,
    summary,
    content,
    imageSrc,
    imageHeight,
    imageWidth,
    imageAlt,
    slug,
    featured,
    status,
    shares,
  } = await req.json();
  slug = slug.toLowerCase();

  try {
    const post = await createPost({
      title,
      author,
      keywords,
      summary,
      content,
      imageSrc,
      imageHeight,
      imageWidth,
      imageAlt,
      slug,
      featured,
      status,
      shares,
    });
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
  const params = req.nextUrl.searchParams;
  try {
    if (params.get('published')) {
      const posts = await searchPosts({ status: 'published' });
      const response: ApiResponse = {
        msg: ['Success'],
        success: true,
        data: posts,
      };
      return NextResponse.json(response);
    } else if (params.get('featured')) {
      const posts = await searchPosts({ featured: 'yes' });
      const response: ApiResponse = {
        msg: ['Success'],
        success: true,
        data: posts,
      };
      return NextResponse.json(response);
    }
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
