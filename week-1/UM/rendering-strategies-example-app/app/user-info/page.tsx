import Link from 'next/link';

export const revalidate = 12;

export default async function UserInfo() {
  const res = await fetch('http://localhost:3000/api/user');
  const user = await res.json();
  console.log('API Response:', user);

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Info (ISR)</h1>
      <p className="mb-3 text-lg"><strong>Name:</strong> {user.name}</p>
      <p className="mb-3 text-lg"><strong>Email:</strong> {user.email}</p>
      <p className="mb-3 text-lg"><strong>Address:</strong> {user.address}</p>
      <Link href="/notes" className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Go to Notes
      </Link>
      <Link href="/notes-client" className="inline-block mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Go to Notes Client
      </Link>
    </div>
  );
}
