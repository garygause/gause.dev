'use client';

import React, { useState } from 'react';
import { saveUser } from '@/app/lib/api-client';
import { updateCacheAndRedirect } from '@/app/lib/actions';

type UserProps = {
  user?: {
    _id: string;
    name: string;
    email: string;
    password: string;
  };
};

export function UserForm(props: UserProps) {
  const [name, setName] = useState(props.user?.name || '');
  const [email, setEmail] = useState(props.user?.email || '');
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const _id = props.user?._id || '';

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    const { msg, success } = await saveUser(
      {
        name: name,
        email: email,
        password: password,
      },
      _id
    );

    setError(msg);
    setSuccess(success);
    if (success) {
      setName('');
      setEmail('');
      setPassword('');
      updateCacheAndRedirect(
        ['/admin/users', '/admin/users/edit/[id]'],
        '/admin/users'
      );
    }
  };

  return (
    <>
      <form
        className="py-4 mt-4 flex flex-col gap-5"
        onSubmit={handleFormSubmit}
      >
        <div>
          <label htmlFor="name">
            Name: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">
            Email: <span className="text-palette-red-500">*</span>
          </label>
          <input
            type="text"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">
            Password:{' '}
            {_id ? '' : <span className="text-palette-red-500">*</span>}
          </label>
          <input
            type="text"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-palette-red font-bold py-3 text-white"
          type="submit"
        >
          Save
        </button>
      </form>
      <div className="flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`px-5 py-2 mt-5 ${
                success ? 'text-white' : 'text-palette-red-700'
              }`}
              key={e}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  );
}

export default UserForm;
