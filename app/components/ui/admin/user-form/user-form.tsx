import React from 'react';
import { redirect } from 'next/navigation';
import { revalidatePath, revalidateTag } from 'next/cache';

import { User } from '@/app/lib/definitions';
import { saveUser } from '@/app/lib/api-client';

type UserProps = {
  user?: User;
};

function UserForm(props: UserProps) {
  const _id = props.user?._id || '';

  async function saveUserForm(_id: string, formData: FormData) {
    'use server';
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const role = formData.get('role') as string;

    const user: User = {
      name: name,
      email: email,
      password: password,
      role: role,
    };
    console.log(user);
    const { msg, success } = await saveUser(user, _id);
    if (success) {
      //revalidatePath('/admin/users');
      revalidatePath('/admin/users/edit/[id]', 'page');
      revalidateTag('users');
      revalidateTag('user)');
      redirect('/admin/users');
    }
  }

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        action={saveUserForm.bind(null, _id)}
      >
        <div>
          <label htmlFor="name">
            Name: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={props.user?.name}
            placeholder="Name"
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
            defaultValue={props.user?.email}
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password">
            Password:{' '}
            {_id ? '' : <span className="text-palette-red-500">*</span>}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>
        <div>
          <label htmlFor="Role">
            Role: <span className="text-palette-red-500">*</span>
          </label>
          <select
            id="role"
            name="role"
            defaultValue={props.user?.role}
            className="p-3 bg-white"
          >
            <option value="">Select a role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
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

export default UserForm;
