'use client';

import { useEffect, useRef } from 'react';

const AutoScrollCarousel = ({ children, scrollSpeed = 0.5, className = '' }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;

    const scroll = () => {
      container.scrollLeft += scrollSpeed;

      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollSpeed]);

  return (
    <div
      ref={scrollRef}
      className={`w-full overflow-x-auto whitespace-nowrap px-4 scroll-smooth py-6 scrollbar-hide ${className}`}
    >
      <div className="flex gap-4">
        {children}
      </div>
    </div>
  );
};

export default AutoScrollCarousel;
