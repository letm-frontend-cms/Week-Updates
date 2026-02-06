export const revalidate = 12;


export default async function UserInfoDynamic() {
  const res = await fetch('http://localhost:3000/api/user', { cache: 'no-store' });
  const user = await res.json();

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">User Info (SSR)</h1>
      <p className="mb-3 text-lg"><strong>Name:</strong> {user.name}</p>
      <p className="mb-3 text-lg"><strong>Email:</strong> {user.email}</p>
      <p className="mb-3 text-lg"><strong>Address:</strong> {user.address}</p>
    </div>
  );
}
