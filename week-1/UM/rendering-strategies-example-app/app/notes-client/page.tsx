import NotesListClient from '../components/NotesListClient';
import AddNote from '../components/AddNote';

export default function NotesClient() {
  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Notes (Client)</h1>
      <AddNote />
      <NotesListClient />
    </div>
  );
}
