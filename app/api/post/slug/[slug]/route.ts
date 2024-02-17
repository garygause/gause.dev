import { NextRequest, NextResponse } from 'next/server';

import { getPostBySlug } from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  try {
    const post = await getPostBySlug(slug);
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
