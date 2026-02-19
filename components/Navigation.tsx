import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NexDriveLogo } from './NexDriveLogo';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-nex-navy/95 backdrop-blur-sm border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        <a href="#" className="cursor-pointer">
          <NexDriveLogo size="sm" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {['Method', 'Courses', 'Fleet', 'Pricing', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold text-white">
            Book Lesson
          </button>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-nex-navy/98 border-t border-white/5 px-6 py-4" style={{ animation: 'fadeSlideIn 0.2s ease-out' }}>
          <div className="flex flex-col gap-1">
            {['Method', 'Courses', 'Fleet', 'Pricing', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-3 text-white/60 hover:text-white transition-colors text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="btn-primary w-full py-3 rounded-lg font-bold text-white text-sm mt-2">
              Book Lesson
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
