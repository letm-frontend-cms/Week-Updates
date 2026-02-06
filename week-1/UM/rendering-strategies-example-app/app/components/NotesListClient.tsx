'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Note {
  id: number;
  title: string;
  content: string;
}

export default function NotesListClient() {
  const [notes, setNotes] = useState<Note[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    fetch('http://localhost:3000/api/notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div key={note.id} className={`p-4 rounded shadow ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}>
          <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
          <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{note.content}</p>
        </div>
      ))}
    </div>

  );
}
