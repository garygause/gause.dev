import React from 'react';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

import { saveContact } from '@/app/lib/api-client';
import { Contact } from '@/app/lib/definitions';

type ContactProps = {
  contact?: Contact;
};

export function ContactForm(props: ContactProps) {
  const _id = props.contact?._id || '';

  async function saveContactForm(_id: string, formData: FormData) {
    'use server';
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const contact: Contact = {
      fullName: fullName,
      email: email,
      message: message,
    };
    console.log(contact);
    const { msg, success } = await saveContact(contact, _id);
    if (success) {
      revalidatePath('/admin/contacts');
      revalidatePath('/admin/contacts/edit/[id]', 'page');
      redirect('/admin/contacts');
    }
  }

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={saveContactForm.bind(null, _id)}
      >
        <div>
          <label htmlFor="title">
            Full Name: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            defaultValue={props.contact?.fullName}
            placeholder="Full Name"
          />
        </div>
        <div>
          <label htmlFor="email">
            Email: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={props.contact?.email}
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="message">
            Message: <span className="text-palette-red-500">*</span>
          </label>
          <textarea
            className="h-32"
            id="message"
            name="message"
            defaultValue={props.contact?.message}
            placeholder="Message"
          ></textarea>
        </div>
        <button
          className="bg-palette-red font-bold py-3 text-white"
          type="submit"
        >
          Save
        </button>
      </form>
    </>
  );
}

export default ContactForm;
