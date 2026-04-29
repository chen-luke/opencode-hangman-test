import React from 'react';
import { Gamepad2, Palette, Trophy, Zap, User, Plus } from 'lucide-react';
import { GameButton } from '../components/GameButton';
import { useGameContext } from '../hooks/useGameState';

interface SidebarProps {
  showLevel?: boolean;
}

export function Sidebar({ showLevel = false }: SidebarProps) {
  const { wins, streak, startGame, selectedCategory } = useGameContext();

  return (
    <aside className="sidebar">
      {/* Profile */}
      <div className="sidebar-profile">
        <div className="profile-avatar">
          {showLevel ? (
            <User size={20} />
          ) : (
            <Zap size={20} />
          )}
        </div>
        <div className="profile-info">
          <span className="profile-name">Player One</span>
          <span className="profile-level">
            {showLevel ? 'Level 12 Architect' : `Win Streak: ${streak}`}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <button className="nav-item active">
          <Gamepad2 size={18} />
          <span>New Game</span>
        </button>
        <button className="nav-item">
          <Palette size={18} />
          <span>Themes</span>
        </button>
        <button className="nav-item">
          <Trophy size={18} />
          <span>Leaderboard</span>
        </button>
      </nav>

      {/* Bottom */}
      <div className="sidebar-bottom">
        <GameButton variant="primary" fullWidth onClick={() => startGame()} disabled={!selectedCategory && !showLevel}>
          <Plus size={16} />
          Quick Start
        </GameButton>

        {!showLevel && (
          <div className="daily-challenge">
            <h4>Daily Challenge</h4>
            <p>Guess 5 words today to earn a Rare Theme!</p>
            <GameButton variant="dark" size="sm" fullWidth>
              Quick Start
            </GameButton>
          </div>
        )}
      </div>
    </aside>
  );
}
