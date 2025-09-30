'use client';

import React, { useEffect, useState } from 'react';

interface LetterGlitchProps {
  text: string;
  className?: string;
}

const LetterGlitch: React.FC<LetterGlitchProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      
      // Create glitch effect
      const glitchText = text
        .split('')
        .map((char, index) => {
          if (Math.random() < 0.1 && char !== ' ') {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        })
        .join('');
      
      setDisplayText(glitchText);
      
      setTimeout(() => {
        setDisplayText(text);
        setIsGlitching(false);
      }, 100);
      
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span 
      className={`font-mono transition-all duration-100 ${
        isGlitching ? 'text-red-500 animate-pulse' : ''
      } ${className}`}
      style={{
        textShadow: isGlitching 
          ? '2px 0 #ff0000, -2px 0 #00ffff, 0 2px #ffff00' 
          : 'none'
      }}
    >
      {displayText}
    </span>
  );
};

export default LetterGlitch;