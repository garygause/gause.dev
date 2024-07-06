import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function CreateMediaFileButton() {
  return (
    <Link
      href="/admin/media/edit"
      className="flex h-10 items-center rounded-md bg-palette-jade px-4 text-sm font-medium text-white transition-colors hover:bg-palette-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block text-lg">Create Media File</span>{' '}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateMediaFileButton({ id }: { id: string }) {
  return (
    <Link
      href={`/admin/media/edit/${id}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteMediaFileButton({ id }: { id: string }) {
  return (
    <>
      <Link
        href={`/admin/media/delete/${id}`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </Link>
    </>
  );
}
