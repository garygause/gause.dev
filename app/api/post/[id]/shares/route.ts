import { NextRequest, NextResponse } from 'next/server';

import { incrementPostShares } from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const post = await incrementPostShares(id);
    const response: ApiResponse = {
      msg: ['Success.'],
      success: true,
      data: post,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to update Post.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
