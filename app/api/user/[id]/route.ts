import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

import { connectDB } from '@app/lib/mongodb';
import User from '@app/models/user';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  console.log('api: ' + params.id);
  try {
    await connectDB();
    const user = await User.findById(id);
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
      msg: 'Unable to retrieve User.',
      success: false,
    });
  }
}
