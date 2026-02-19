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

  const navClasses = scrolled
    ? 'py-3 px-8 w-[90%] md:w-[70%] bg-glass-100 backdrop-blur-md border border-glass-border shadow-2xl top-4 rounded-full'
    : 'py-6 px-8 w-full top-0 bg-transparent border-transparent';

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${navClasses}`}>
      <div className="flex justify-between items-center">

        {/* Logo */}
        <a href="#" className="group cursor-pointer">
          <NexDriveLogo size="sm" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Method', 'Courses', 'Fleet', 'Pricing', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-nex-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button className="btn-primary px-6 py-2 rounded-full text-sm font-semibold text-white">
            Book Lesson
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-4 p-4 glass-card rounded-2xl md:hidden" style={{ animation: 'fadeSlideIn 0.3s ease-out' }}>
          <div className="flex flex-col gap-4">
            {['Method', 'Courses', 'Fleet', 'Pricing', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="p-3 hover:bg-white/5 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="btn-primary w-full py-3 rounded-xl font-bold text-white">
              Book Lesson
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
