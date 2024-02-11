import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';

import { createContact, getContacts } from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function POST(req: NextRequest) {
  const { fullName, email, message } = await req.json();
  try {
    const contact = await createContact({ fullName, email, message });
    const response: ApiResponse = {
      msg: ['Contact created.'],
      success: true,
      data: contact,
    };
    return NextResponse.json(response);
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList: string[] = [];
      for (let e in error.errors) {
        console.log(e);
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
        msg: ['Unable to create Contact.'],
        success: false,
        data: null,
      };
      return NextResponse.json(response);
    }
  }
}

export async function GET(req: NextRequest) {
  try {
    const contacts = await getContacts();
    const response: ApiResponse = {
      msg: ['Success.'],
      success: true,
      data: contacts,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to retrieve Contacts.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
