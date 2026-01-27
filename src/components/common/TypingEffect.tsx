import React, { useState, useEffect, useMemo } from 'react';

interface TypingEffectProps {
  toRotate: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ 
  toRotate, 
  typingSpeed = 80, 
  deletingSpeed = 50, 
  pauseDuration = 1200 
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);
  const [isPaused, setIsPaused] = useState(false);
  
  useEffect(() => {
    let ticker = setInterval(() => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1);

      if (updatedText === text) return;

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsPaused(true);
        setIsDeleting(true);
        setDelta(pauseDuration);
      } else if (isDeleting && updatedText === '') {
        setIsPaused(false);
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(typingSpeed);
      } else if (isDeleting) {
        setIsPaused(false);
        setDelta(deletingSpeed);
      } else {
        setIsPaused(false);
        setDelta(typingSpeed);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent transform-gpu min-h-[1.5em] flex items-center justify-center">
      {text}
      <span className={`text-gray-400 font-light ml-1 ${isPaused ? 'animate-pulse' : ''}`}>|</span>
    </h2>
  );
};

export default React.memo(TypingEffect);
