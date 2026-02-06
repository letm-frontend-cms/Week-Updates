
import NotesList from '../components/NotesList';
import AddNote from '../components/AddNote';
import ThemeWrapper from "@/app/components/ThemeWrapper";

export default function Notes() {
  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Notes</h1>
      <AddNote />
        <ThemeWrapper>
            <NotesList />
        </ThemeWrapper>
    </div>
  );
}
