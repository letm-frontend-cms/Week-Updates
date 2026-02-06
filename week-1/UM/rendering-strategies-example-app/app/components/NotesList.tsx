interface Note {
  id: number;
  title: string;
  content: string;
}

export default async function NotesList() {
  const res = await fetch('http://localhost:3000/api/notes');
  const notes: Note[] = await res.json();

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div key={note.id} className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
          <p className="text-gray-600">{note.content}</p>
        </div>
      ))}
    </div>
  );
}
