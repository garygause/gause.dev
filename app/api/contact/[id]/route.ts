import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { revalidateTag } from 'next/cache';

import { deleteContact, getContact, updateContact } from '@/app/lib/mongodb';
import { ApiResponse } from '@/app/lib/definitions';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  try {
    const contact = await getContact(id);
    const response: ApiResponse = {
      msg: ['Success.'],
      success: true,
      data: contact,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to retrieve Contact.'],
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
    const { fullName, email, message } = await req.json();
    let update = { fullName, email, message };
    const updatedContact = updateContact({ _id: id }, update);
    revalidateTag('contact');
    revalidateTag('contacts');

    const response: ApiResponse = {
      msg: ['Contact updated.'],
      success: true,
      data: updatedContact,
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
        msg: ['Unable to save Contact.'],
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
    await deleteContact(params.id);
    revalidateTag('contacts');

    const response: ApiResponse = {
      msg: ['Contact deleted.'],
      success: true,
      data: null,
    };
    return NextResponse.json(response);
  } catch (error) {
    const response: ApiResponse = {
      msg: ['Unable to delete Contact.'],
      success: false,
      data: null,
    };
    return NextResponse.json(response);
  }
}
