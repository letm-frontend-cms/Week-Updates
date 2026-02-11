import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-blue-700 hover:text-blue-800"
          >
            GRFF Platform
          </Link>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Blog
            </Link>
            <Link
              href="/integration-demo"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Integrations
            </Link>
            <Link
              href="/profile/1"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
