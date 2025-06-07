import React, { useEffect, useState } from 'react';

const DotBackground = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const count = 2000;
    const windowHeight = window.innerHeight; // Get the viewport height
    const newDots = Array.from({ length: count }).map(() => {
      const size = Math.random() * 1 + 1;
      return {
        size: size,
        left: Math.random() * 100,         // position horizontally in %
        top: Math.random() * 100,          // initial vertical position in %
        delay: Math.random() * 10,         // random animation delay
        duration: 11 + Math.random() * 10, // how long it takes to float up
        startOffset: Math.random() * windowHeight, // Random offset to make dots appear at different starting points
      };
    });
    setDots(newDots);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {dots.map((dot, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full opacity-10 animate-floatUp"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.left}%`,
            top: `${dot.top}%`, // Set initial top position
            animationDelay: `${dot.delay}s`,
            animationDuration: `${dot.duration}s`,
            '--start-offset': `${dot.startOffset}px`, // Pass the random start offset as a CSS variable
            '--dot-size': `${dot.size}px`, // Pass dot size as a CSS variable
            filter: 'drop-shadow(0 0 2px white)',
          }}
        />
      ))}
    </div>
  );
};

export default DotBackground;