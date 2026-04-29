interface HangmanCanvasProps {
  lives: number;
  maxLives: number;
}

// SVG drawing stages: each wrong guess draws a part
const parts = [
  'head',       // 1 wrong
  'body',       // 2 wrong
  'leftArm',    // 3 wrong
  'rightArm',   // 4 wrong
  'leftLeg',    // 5 wrong
  'rightLeg',   // 6 wrong
];

export function HangmanCanvas({ lives, maxLives }: HangmanCanvasProps) {
  const wrongGuesses = maxLives - lives;
  const stagesToDraw = parts.slice(0, wrongGuesses);

  return (
    <svg width="280" height="340" viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gallows base */}
      <line x1="30" y1="310" x2="200" y2="310" stroke="#111c2d" strokeWidth="5" strokeLinecap="round" />
      {/* Vertical post */}
      <line x1="70" y1="310" x2="70" y2="30" stroke="#111c2d" strokeWidth="5" strokeLinecap="round" />
      {/* Horizontal beam */}
      <line x1="70" y1="30" x2="220" y2="30" stroke="#111c2d" strokeWidth="5" strokeLinecap="round" />
      {/* Rope */}
      <line x1="220" y1="30" x2="220" y2="65" stroke="#464554" strokeWidth="3" strokeLinecap="round" />
      {/* Support beam */}
      <line x1="70" y1="70" x2="120" y2="30" stroke="#111c2d" strokeWidth="4" strokeLinecap="round" />

      {/* Head — clean circle, no face details */}
      {stagesToDraw.includes('head') && (
        <g key="head" style={{ animation: 'bounceIn 0.4s ease' }}>
          <circle cx="220" cy="90" r="25" stroke="#111c2d" strokeWidth="4" fill="none" />
        </g>
      )}

      {/* Body */}
      {stagesToDraw.includes('body') && (
        <line key="body" x1="220" y1="115" x2="220" y2="200" stroke="#111c2d" strokeWidth="4" strokeLinecap="round"
          style={{ animation: 'bounceIn 0.4s ease' }} />
      )}

      {/* Left arm */}
      {stagesToDraw.includes('leftArm') && (
        <line key="leftArm" x1="220" y1="140" x2="190" y2="175" stroke="#111c2d" strokeWidth="4" strokeLinecap="round"
          style={{ animation: 'bounceIn 0.4s ease' }} />
      )}

      {/* Right arm */}
      {stagesToDraw.includes('rightArm') && (
        <line key="rightArm" x1="220" y1="140" x2="250" y2="175" stroke="#111c2d" strokeWidth="4" strokeLinecap="round"
          style={{ animation: 'bounceIn 0.4s ease' }} />
      )}

      {/* Left leg — dashed until right leg appears */}
      {stagesToDraw.includes('leftLeg') && (
        <line key="leftLeg" x1="220" y1="200" x2="195" y2="255" stroke="#111c2d" strokeWidth="4" strokeLinecap="round"
          strokeDasharray={stagesToDraw.includes('rightLeg') ? undefined : '8 4'}
          style={{ animation: 'bounceIn 0.4s ease' }} />
      )}

      {/* Right leg */}
      {stagesToDraw.includes('rightLeg') && (
        <line key="rightLeg" x1="220" y1="200" x2="245" y2="255" stroke="#111c2d" strokeWidth="4" strokeLinecap="round"
          style={{ animation: 'bounceIn 0.4s ease' }} />
      )}
    </svg>
  );
}
