import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({
  children,
  icon: Icon,
  disabled,
  loading,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const baseStyles = "flex items-center justify-center space-x-2 px-5 py-3 rounded-full font-semibold transition-all duration-300";
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-emerald-500 hover:shadow-lg hover:shadow-blue-500/25",
    secondary: "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50"
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? 'opacity-75 cursor-not-allowed' : ''
      } ${className}`}
    >
      {loading ? (
        <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin" />
      ) : Icon && <Icon className="w-5 h-5" />}
      <span>{loading ? 'Loading...' : children}</span>
    </button>
  );
}