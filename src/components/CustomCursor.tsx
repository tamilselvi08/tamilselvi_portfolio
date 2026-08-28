import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch desktop screens
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('.interactive-card') ||
          target.closest('[role="button"]')
        );
        setIsPointer(isInteractive);
        setIsHovered(Boolean(target.closest('.interactive-card')));
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isPointer
              ? 'w-3 h-3 bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]'
              : 'w-1.5 h-1.5 bg-cyan-400'
          }`}
        />
      </div>

      {/* Outer engineering target ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-40 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        <div
          className={`rounded-full border border-cyan-400/50 transition-all duration-300 ${
            isHovered
              ? 'w-12 h-12 border-cyan-400 bg-cyan-400/10 scale-125'
              : isPointer
              ? 'w-9 h-9 border-cyan-400/80 bg-cyan-400/5'
              : 'w-6 h-6 border-cyan-500/30'
          }`}
        >
          {/* Subtle crosshair notches */}
          {isPointer && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-[1px] bg-cyan-400/20"></div>
              <div className="h-full w-[1px] bg-cyan-400/20 absolute"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
