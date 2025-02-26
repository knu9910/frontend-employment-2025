import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* 사이드바 */}
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-4">Group3 레이아웃 입니다.</h2>
        <nav className="space-y-2">
          <Link href="/admin" className="block py-2 px-4 hover:bg-gray-700 rounded">
            Dashboard
          </Link>
          <Link href="/admin/user" className="block py-2 px-4 hover:bg-gray-700 rounded">
            User Management
          </Link>
        </nav>
      </aside>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 p-6 bg-gray-100">{children}</main>
    </div>
  );
}
