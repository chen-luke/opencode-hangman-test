import React from 'react';

interface GameButtonProps {
  variant?: 'primary' | 'outline' | 'pink-outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export function GameButton({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  onClick,
  disabled,
}: GameButtonProps) {
  const cls = [
    'btn',
    variant === 'primary' ? 'btn-primary' : '',
    variant === 'outline' ? 'btn-outline' : '',
    variant === 'pink-outline' ? 'btn-pink-outline' : '',
    variant === 'dark' ? 'btn-dark' : '',
    size === 'sm' ? 'btn-sm' : '',
    size === 'lg' ? 'btn-lg' : '',
    fullWidth ? 'btn-full' : '',
    disabled ? 'disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
