'use client';

import React from 'react';

import { Button } from '@ui/button';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-b-lg border-2 border-t-0 border-palette-matte  px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">Please log in to continue.</h1>
        <div className="w-full">
          <div>
            <label className="mb-3 mt-3 block " htmlFor="email">
              Email <span className="text-palette-red-500">*</span>
            </label>
            <div className="relative">
              <input
                className="rounded w-full"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-3 mt-3 block" htmlFor="password">
              Password <span className="text-palette-red-500">*</span>
            </label>
            <div className="relative">
              <input
                className="rounded w-full"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p>{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-6 bg-palette-red font-bold py-3 text-white rounded-lg hover:bg-palette-brown"
      aria-disabled={pending}
    >
      Log in
    </Button>
  );
}
