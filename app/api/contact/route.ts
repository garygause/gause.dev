import { NextRequest, NextResponse } from 'next/server';

import { connectDB } from '@/app/lib/mongodb';
import Contact from '@/app/models/contact';
import mongoose from 'mongoose';

export async function POST(req: NextRequest) {
  const { fullName, email, message } = await req.json();
  try {
    console.log('connecting to db');

    await connectDB();
    console.log('connecting to db');
    console.log('creating contact');
    await Contact.create({ fullName, email, message });

    return NextResponse.json({ msg: ['Message sent.'], success: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        console.log(e);
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList, success: false });
    } else {
      return NextResponse.json({
        msg: 'Unable to send message.',
        success: false,
      });
    }
  }
}
