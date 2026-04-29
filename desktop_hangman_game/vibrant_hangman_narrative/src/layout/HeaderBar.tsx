import React from 'react';
import { HelpCircle, Settings } from 'lucide-react';

interface HeaderBarProps {
  showPills?: boolean;
  lives?: number;
  streak?: number;
}

export function HeaderBar({ showPills = false, lives = 3, streak = 5 }: HeaderBarProps) {
  return (
    <header className="header-bar">
      <div className="header-logo">
        <span style={{ fontSize: '1.5rem' }}>🎮</span>
        Hangman Tactile
      </div>

      <div className="header-actions">
        {showPills && (
          <>
            <span className="pill pill-pink">
              ☆ Win Streak: {streak}
            </span>
            <span className="pill pill-yellow">
              ♡ Lives: {lives}
            </span>
          </>
        )}
        <button className="header-icon-btn" title="Help">
          <HelpCircle size={18} />
        </button>
        <button className="header-icon-btn" title="Settings">
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
}
