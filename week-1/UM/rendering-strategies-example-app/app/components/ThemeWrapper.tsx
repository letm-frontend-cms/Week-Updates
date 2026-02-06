'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  
  return (
    <div style={{ border: `2px solid ${theme === 'dark' ? '#fff' : '#000'}` }}>
      {children}
    </div>
  );
}
