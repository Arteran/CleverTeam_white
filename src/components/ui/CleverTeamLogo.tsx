export function CleverTeamLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Top Left Leaf Gradient */}
        <linearGradient id="grad-tl" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#68B632" />
          <stop offset="100%" stopColor="#41961F" />
        </linearGradient>
        {/* Top Right Leaf Gradient */}
        <linearGradient id="grad-tr" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#25A33E" />
          <stop offset="100%" stopColor="#117827" />
        </linearGradient>
        {/* Bottom Right Leaf Gradient */}
        <linearGradient id="grad-br" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#118D2E" />
          <stop offset="100%" stopColor="#085A18" />
        </linearGradient>
        {/* Bottom Left Leaf Gradient (Smaller, yellow-green) */}
        <linearGradient id="grad-bl" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#B1D11B" />
          <stop offset="100%" stopColor="#8BAC10" />
        </linearGradient>
      </defs>

      {/* Top Left Leaf (Sharp corner at bottom-right 49,49. Size 44x44. Radius 22) */}
      <path 
        d="M 49,49 L 27,49 A 22,22 0 0,1 5,27 A 22,22 0 0,1 27,5 A 22,22 0 0,1 49,27 Z" 
        fill="url(#grad-tl)" 
      />
      
      {/* Top Right Leaf (Sharp corner at bottom-left 51,49. Size 44x44. Radius 22) */}
      <path 
        d="M 51,49 L 51,27 A 22,22 0 0,1 73,5 A 22,22 0 0,1 95,27 A 22,22 0 0,1 73,49 Z" 
        fill="url(#grad-tr)" 
      />
      
      {/* Bottom Right Leaf (Sharp corner at top-left 51,51. Size 44x44. Radius 22) */}
      <path 
        d="M 51,51 L 73,51 A 22,22 0 0,1 95,73 A 22,22 0 0,1 73,95 A 22,22 0 0,1 51,73 Z" 
        fill="url(#grad-br)" 
      />
      
      {/* Bottom Left Leaf (Sharp corner at top-right 49,51. Smaller size 32x32. Radius 16) */}
      <path 
        d="M 49,51 L 49,67 A 16,16 0 0,1 33,83 A 16,16 0 0,1 17,67 A 16,16 0 0,1 33,51 Z" 
        fill="url(#grad-bl)" 
      />
    </svg>
  );
}
