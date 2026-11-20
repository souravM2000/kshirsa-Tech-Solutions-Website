import React from 'react';

interface TechIconProps {
  id: string;
  className?: string;
  size?: number;
}

export const TechLogo: React.FC<TechIconProps> = ({ id, className = "w-8 h-8", size = 32 }) => {
  switch (id) {
    case 'java':
      return (
        <svg viewBox="0 0 256 348" width={size} height={size} className={className} fill="none">
          {/* Java cup & steam icon */}
          <path d="M110 5C110 5 80 50 110 90C125 110 135 125 110 150C95 165 80 180 95 200" stroke="#E76F00" strokeWidth="18" strokeLinecap="round" />
          <path d="M150 20C150 20 120 60 145 95C165 120 165 140 140 165" stroke="#5382A1" strokeWidth="16" strokeLinecap="round" />
          <path d="M40 230C40 230 45 285 128 285C210 285 216 230 216 230L40 230Z" fill="#5382A1" />
          <path d="M216 235C240 235 250 250 240 270C230 290 205 285 195 280" stroke="#5382A1" strokeWidth="14" strokeLinecap="round" />
          <ellipse cx="128" cy="230" rx="88" ry="15" fill="#E76F00" />
          <path d="M60 305C90 325 166 325 196 305" stroke="#E76F00" strokeWidth="14" strokeLinecap="round" />
        </svg>
      );

    case 'springboot':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <rect width="256" height="256" rx="48" fill="#6DB33F" fillOpacity="0.12" />
          <path d="M128 35L210 82V174L128 221L46 174V82L128 35Z" stroke="#6DB33F" strokeWidth="14" fill="#6DB33F" fillOpacity="0.2" />
          <path d="M100 165C85 145 85 110 115 90C140 75 165 85 165 110C165 135 140 160 115 165" stroke="#6DB33F" strokeWidth="14" strokeLinecap="round" fill="#6DB33F" />
          <circle cx="140" cy="120" r="12" fill="#ffffff" />
        </svg>
      );

    case 'csharp':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <polygon points="128,20 225,76 225,180 128,236 31,180 31,76" fill="#239120" fillOpacity="0.1" stroke="#239120" strokeWidth="10" />
          <circle cx="128" cy="128" r="85" fill="#9B4F96" />
          <path d="M150 95C140 85 120 85 110 95C95 110 95 146 110 161C120 171 140 171 150 161" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" />
          <text x="145" y="145" fill="#ffffff" fontSize="48" fontWeight="bold" fontFamily="sans-serif">#</text>
        </svg>
      );

    case 'dotnet':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <rect width="256" height="256" rx="48" fill="#512BD4" fillOpacity="0.12" />
          <circle cx="128" cy="128" r="90" fill="#512BD4" />
          <circle cx="68" cy="165" r="12" fill="#ffffff" />
          <text x="80" y="152" fill="#ffffff" fontSize="68" fontWeight="900" fontFamily="sans-serif">NET</text>
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <path d="M125 30C80 30 83 50 83 50L83 70L128 70L128 76L62 76C40 76 22 93 22 120C22 148 37 150 48 150L60 150L60 132C60 112 77 96 97 96L143 96C158 96 170 83 170 68L170 48C170 33 155 30 125 30Z" fill="#3776AB" />
          <circle cx="100" cy="50" r="7" fill="#ffffff" />
          <path d="M131 226C176 226 173 206 173 206L173 186L128 186L128 180L194 180C216 180 234 163 234 136C234 108 219 106 208 106L196 106L196 124C196 144 179 160 159 160L113 160C98 160 86 173 86 188L86 208C86 223 101 226 131 226Z" fill="#FFD43B" />
          <circle cx="156" cy="206" r="7" fill="#ffffff" />
        </svg>
      );

    case 'nodejs':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <polygon points="128,24 220,77 220,183 128,236 36,183 36,77" fill="#339933" />
          <path d="M128 65L178 94V152L128 181L78 152V94L128 65Z" stroke="#ffffff" strokeWidth="10" fill="none" />
          <path d="M105 145V110L140 145V110" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'nestjs':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <rect width="256" height="256" rx="48" fill="#E0234E" fillOpacity="0.1" />
          <path d="M128 30C128 30 70 80 85 150C95 200 150 230 190 200C165 195 150 170 160 145C170 120 160 90 128 30Z" fill="#E0234E" />
          <path d="M90 135C65 150 60 185 85 205C70 180 75 155 90 135Z" fill="#E0234E" opacity="0.7" />
          <circle cx="120" cy="115" r="9" fill="#ffffff" />
        </svg>
      );

    case 'javascript':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <rect width="256" height="256" rx="40" fill="#F7DF1E" />
          <path d="M80 140V185C80 200 68 205 52 195" stroke="#000000" strokeWidth="18" strokeLinecap="round" />
          <path d="M125 150C130 142 145 140 155 145C165 150 165 160 155 168L130 185C125 190 130 205 155 205C170 205 180 195 180 188" stroke="#000000" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'typescript':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <rect width="256" height="256" rx="40" fill="#3178C6" />
          <path d="M60 125H115M87 125V200" stroke="#ffffff" strokeWidth="20" strokeLinecap="round" />
          <path d="M140 145C148 135 170 135 182 145C192 153 190 165 175 172L150 182C140 187 145 200 170 200C185 200 195 192 195 185" stroke="#ffffff" strokeWidth="20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'react':
    case 'reactnative':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <circle cx="128" cy="128" r="22" fill="#61DAFB" />
          <ellipse cx="128" cy="128" rx="100" ry="38" stroke="#61DAFB" strokeWidth="12" />
          <ellipse cx="128" cy="128" rx="100" ry="38" stroke="#61DAFB" strokeWidth="12" transform="rotate(60 128 128)" />
          <ellipse cx="128" cy="128" rx="100" ry="38" stroke="#61DAFB" strokeWidth="12" transform="rotate(120 128 128)" />
        </svg>
      );

    case 'nextjs':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <circle cx="128" cy="128" r="118" fill="#000000" />
          <path d="M96 75V181M160 75V140" stroke="#ffffff" strokeWidth="18" strokeLinecap="round" />
          <path d="M96 75L185 195" stroke="url(#nextGrad)" strokeWidth="18" strokeLinecap="round" />
          <defs>
            <linearGradient id="nextGrad" x1="96" y1="75" x2="185" y2="195" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffffff" />
              <stop offset="0.7" stopColor="#ffffff" />
              <stop offset="1" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'angular':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <polygon points="128,25 220,58 206,180 128,231 50,180 36,58" fill="#DD0031" />
          <polygon points="128,25 220,58 206,180 128,231 128,25" fill="#C3002F" />
          <path d="M128 62L82 170H103L114 142H142L153 170H174L128 62ZM128 102L137 124H119L128 102Z" fill="#ffffff" />
        </svg>
      );

    case 'ionic':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <rect width="256" height="256" rx="48" fill="#3880FF" fillOpacity="0.1" />
          <circle cx="128" cy="128" r="90" fill="#3880FF" />
          <circle cx="128" cy="128" r="60" stroke="#ffffff" strokeWidth="14" fill="none" />
          <circle cx="160" cy="96" r="18" fill="#ffffff" />
        </svg>
      );

    case 'aws':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <rect width="256" height="256" rx="48" fill="#232F3E" fillOpacity="0.06" />
          <text x="50" y="125" fill="#232F3E" fontSize="56" fontWeight="bold" fontFamily="sans-serif">aws</text>
          <path d="M60 155C110 190 165 185 200 150" stroke="#FF9900" strokeWidth="14" strokeLinecap="round" />
          <polygon points="195,140 210,152 188,162" fill="#FF9900" />
        </svg>
      );

    case 'azure':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <path d="M55 200L135 45H170L100 200H55Z" fill="#0078D4" />
          <path d="M125 150L155 90L205 200H150L125 150Z" fill="#50E6FF" />
          <path d="M95 190L135 150H185L170 190H95Z" fill="#005BA1" />
        </svg>
      );

    case 'gcp':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <path d="M150 70C135 60 115 65 105 75C95 85 92 100 95 115C85 115 70 125 70 140C70 155 82 170 100 170H180C195 170 208 158 208 142C208 128 195 116 182 116C182 95 168 78 150 70Z" fill="#EA4335" />
          <circle cx="160" cy="130" r="35" fill="#4285F4" />
          <ellipse cx="120" cy="140" rx="40" ry="25" fill="#FBBC05" />
          <circle cx="140" cy="115" r="28" fill="#34A853" />
        </svg>
      );

    case 'ai-core':
    case 'llm':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <rect width="256" height="256" rx="48" fill="#00B887" fillOpacity="0.12" />
          <rect x="70" y="70" width="116" height="116" rx="20" stroke="#00B887" strokeWidth="14" fill="#00B887" fillOpacity="0.2" />
          <circle cx="128" cy="128" r="24" fill="#00B887" />
          <path d="M128 35V70M128 186V221M35 128H70M186 128H221" stroke="#00B887" strokeWidth="12" strokeLinecap="round" />
          <circle cx="128" cy="35" r="8" fill="#00B887" />
          <circle cx="128" cy="221" r="8" fill="#00B887" />
          <circle cx="35" cy="128" r="8" fill="#00B887" />
          <circle cx="221" cy="128" r="8" fill="#00B887" />
        </svg>
      );

    case 'mcp':
    case 'rag':
    case 'ai-agents':
    case 'chatbots':
      return (
        <svg viewBox="0 0 256 256" width={size} height={size} className={className} fill="none">
          <rect width="256" height="256" rx="48" fill="#004D3B" fillOpacity="0.08" />
          <path d="M60 128C60 90 90 60 128 60C166 60 196 90 196 128C196 150 185 170 170 182V205L140 194C136 195 132 196 128 196C90 196 60 166 60 128Z" stroke="#00B887" strokeWidth="14" strokeLinejoin="round" fill="#00B887" fillOpacity="0.15" />
          <circle cx="105" cy="125" r="10" fill="#00B887" />
          <circle cx="151" cy="125" r="10" fill="#00B887" />
          <path d="M110 155Q128 168 146 155" stroke="#00B887" strokeWidth="10" strokeLinecap="round" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
};
