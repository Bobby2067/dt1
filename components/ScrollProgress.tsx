import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setWidth(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[3px] z-[100] transition-all duration-150 ease-linear"
      style={{
        width: `${width}%`,
        background: 'linear-gradient(to right, #0066CC, #68C132)',
        boxShadow: '0 0 10px rgba(0, 102, 204, 0.5)'
      }}
    />
  );
};
