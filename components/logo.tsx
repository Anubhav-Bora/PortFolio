export const Logo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <div className={`${className} relative`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.7" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
          </linearGradient>
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
          </radialGradient>
        </defs>

        {/* Outer orbital ring */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="1.5"
          strokeDasharray="8,4"
          opacity="0.6"
        />

        {/* Middle orbital ring */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
          strokeDasharray="4,3"
          opacity="0.5"
        />

        {/* Inner orbital ring */}
        <circle cx="50" cy="50" r="16" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.8" opacity="0.4" />

        {/* Central core */}
        <circle cx="50" cy="50" r="8" fill="url(#centerGradient)" />
        <circle cx="50" cy="50" r="4" fill="hsl(var(--background))" opacity="0.9" />
        <circle cx="50" cy="50" r="2" fill="hsl(var(--primary))" />

        {/* Orbital nodes representing the three passions */}
        <circle cx="50" cy="22" r="3" fill="hsl(var(--primary))" opacity="0.8" />
        <circle cx="73" cy="61" r="3" fill="hsl(var(--accent))" opacity="0.8" />
        <circle cx="27" cy="61" r="3" fill="hsl(var(--primary))" opacity="0.8" />

        {/* Connection lines */}
        <line x1="50" y1="34" x2="50" y2="42" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.6" />
        <line x1="65" y1="56" x2="58" y2="50" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.6" />
        <line x1="35" y1="56" x2="42" y2="50" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.6" />

        {/* Subtle energy particles */}
        <circle cx="35" cy="35" r="1" fill="hsl(var(--accent))" opacity="0.7" />
        <circle cx="65" cy="35" r="1" fill="hsl(var(--primary))" opacity="0.7" />
        <circle cx="50" cy="75" r="1" fill="hsl(var(--accent))" opacity="0.7" />
      </svg>
    </div>
  )
}
