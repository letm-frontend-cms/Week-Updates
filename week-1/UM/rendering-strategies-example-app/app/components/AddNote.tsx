'use client';

import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import NotesList from "@/app/components/NotesList";

export default function AddNote() {
  const [note, setNote] = useState('');
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Note added:', note);
    setNote('');
  };

  console.log(`i was rendered ${theme}`);

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Enter a note"
        className={`w-full p-3 border rounded mb-3 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white'}`}
      />
      <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Submit
      </button>
    </form>

  );
}

