import Link from 'next/link';
import SignOutButton from '@ui/signout-button';
import { auth } from '@/auth';

export default async function UserNav() {
  const session = await auth();
  return (
    <div className="flex grow flex-row space-x-2 md:flex-col md:space-x-0 md:space-y-0">
      <div className="min-h-10 grow"></div>
      <div className="border-t border-palette-brown hover:bg-palette-brown">
        <Link
          href="/profile"
          className="pl-4 flex h-[48px] w-full grow items-center justify-center gap-2 font-medium hover:bg-palette-brown hover:text-white md:flex-none md:justify-start"
        >
          <div>{session?.user?.name}</div>
        </Link>
      </div>
      <div className="border-b border-t border-palette-brown">
        <SignOutButton />
      </div>
    </div>
  );
}
