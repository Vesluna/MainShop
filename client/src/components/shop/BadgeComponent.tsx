import React from 'react';

// Type definition for badge types
export type BadgeType = 'NEW' | 'SALE' | 'POPULAR' | 'COMING_SOON' | null;

interface BadgeProps {
  type: BadgeType;
  className?: string;
}

export default function BadgeComponent({ type, className = '' }: BadgeProps) {
  if (!type) return null;
  
  // Base classes that apply to all badges
  const baseClasses = "px-3 py-1 rounded-full text-xs font-bold uppercase shadow-lg";
  
  // Type-specific classes
  const typeClasses = {
    'NEW': 'bg-gradient-to-r from-green-400 to-green-600 text-white border border-green-300',
    'SALE': 'bg-gradient-to-r from-red-400 to-red-600 text-white border border-red-300',
    'POPULAR': 'bg-gradient-to-r from-blue-400 to-blue-600 text-white border border-blue-300',
    'COMING_SOON': 'bg-gradient-to-r from-purple-400 to-purple-600 text-white border border-purple-300'
  };
  
  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${className}`}>
      {type === 'COMING_SOON' ? 'COMING SOON' : type}
    </div>
  );
}
