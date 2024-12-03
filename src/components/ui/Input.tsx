import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  multiline?: boolean;
  rows?: number;
}

export default function Input({ multiline = false, rows = 6, className = '', ...props }: InputProps) {
  const baseStyles = `
    w-full px-4 py-3 text-white placeholder-gray-500 
    transition-all duration-300 border rounded-lg 
    bg-white/5 border-white/10 
    focus:outline-none focus:ring-2 focus:ring-blue-500/50 
    focus:border-transparent backdrop-blur-sm
  `;

  if (multiline) {
    return (
      <textarea
        rows={rows}
        className={`${baseStyles} resize-none ${className}`}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <input
      className={`${baseStyles} ${className}`}
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
}