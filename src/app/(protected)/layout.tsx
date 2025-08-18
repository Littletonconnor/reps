import Link from 'next/link';

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <main>{children}</main>
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800">
        <div className="flex justify-around items-center h-20 pb-5">
          <Link
            href="/dashboard"
            className="flex flex-col items-center gap-1 text-blue-500"
          >
            <span className="text-xs uppercase font-semibold">today</span>
          </Link>
          <Link
            href="/routines"
            className="flex flex-col items-center gap-1 text-blue-500"
          >
            <span className="text-xs uppercase font-semibold">routines</span>
          </Link>
          <Link
            href="/history"
            className="flex flex-col items-center gap-1 text-blue-500"
          >
            <span className="text-xs uppercase font-semibold">history</span>
          </Link>
          <Link
            href="/profile"
            className="flex flex-col items-center gap-1 text-blue-500"
          >
            <span className="text-xs uppercase font-semibold">profile</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
