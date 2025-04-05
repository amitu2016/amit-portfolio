'use client';

import { useEffect, useState } from 'react';

export default function MeteorShower() {
  const [screenHeight, setScreenHeight] = useState(0);

  // Set screen height only on the client side
  useEffect(() => {
    setScreenHeight(window.innerHeight);
    const handleResize = () => setScreenHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const meteorContainer = document.querySelector('.meteor-container');
    if (!meteorContainer) return;

    const createMeteor = () => {
      const meteor = document.createElement('div');
      meteor.className = 'meteor';
      const startX = Math.random() * (window.innerWidth || 1000); // Fallback width
      const duration = Math.random() * 2 + 1; // Between 1s and 3s
      const delay = Math.random() * 5; // Random delay up to 5s

      meteor.style.left = `${startX}px`;
      meteor.style.animationDuration = `${duration}s`;
      meteor.style.animationDelay = `${delay}s`;

      meteorContainer.appendChild(meteor);

      meteor.addEventListener('animationend', () => {
        meteor.remove();
      });
    };

    const interval = setInterval(createMeteor, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="meteor-container fixed inset-0 pointer-events-none z-0">
      <style jsx>{`
        .meteor {
          position: absolute;
          top: -20px;
          width: 2px;
          height: 20px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0));
          animation: fall linear forwards;
        }

        @keyframes fall {
          0% {
            transform: translateY(0) rotate(45deg);
            opacity: 1;
          }
          100% {
            transform: translateY(${screenHeight ? `${screenHeight + 20}px` : '100vh'}) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}