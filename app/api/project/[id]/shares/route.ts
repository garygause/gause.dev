import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { revalidateTag } from 'next/cache';

import { incrementProjectShares } from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const project = await incrementProjectShares(id);
    const response: ApiResponse = {
      msg: ['Success.'],
      success: true,
      data: project,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to update Project.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
