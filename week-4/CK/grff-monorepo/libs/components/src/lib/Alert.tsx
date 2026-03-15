import React from 'react';

export interface AlertProps {
  children: React.ReactNode;
  type?: 'info' | 'success' | 'warning' | 'error';
}

export function Alert({ children, type = 'info' }: AlertProps) {
  const styles = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    error: 'bg-red-50 text-red-800 border-red-200',
  };

  const icons = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌',
  };

  return (
    <div className={`border-l-4 p-4 rounded ${styles[type]}`}>
      <div className="flex items-start gap-2">
        <span className="text-xl">{icons[type]}</span>
        <div>{children}</div>
      </div>
    </div>
  );
}
