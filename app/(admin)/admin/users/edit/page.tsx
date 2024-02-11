import React from 'react';

import UserForm from '@/app/components/ui/admin/user-form';

export default function UserEditPage() {
  return (
    <div className="mx-auto w-full">
      <div className="container mx-auto max-w-3xl">
        <div className="p-4">
          <h1 className="text-3xl font-bold py-5">Add a User</h1>
          <UserForm />
        </div>
      </div>
    </div>
  );
}
