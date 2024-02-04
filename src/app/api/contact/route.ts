import { NextResponse } from 'next/server';

import { connectDB } from '../../lib/mongodb';
import Contact from '../../models/contact';
import mongoose from 'mongoose';

export async function POST(req) {
  const { fullName, email, message } = await req.json();
  try {
    //await connectDB();
    //await Contact.create({ fullName, email, message });

    return NextResponse.json({ msg: ['Message sent.'], success: true });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        console.log(e);
        //errorList.push(error.errors[e].message);
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
