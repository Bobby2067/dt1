import React, { useState, useEffect } from 'react';
import { Menu, X, Wind } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = scrolled 
    ? 'py-4 px-8 w-[90%] md:w-[70%] bg-glass-100 backdrop-blur-md border border-glass-border shadow-2xl top-4 rounded-full'
    : 'py-6 px-8 w-full top-0 bg-transparent border-transparent';

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${navClasses}`}>
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="p-2 rounded-xl bg-gradient-to-br from-liquid-cyan to-liquid-blue group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            <Wind className="w-5 h-5 text-white" />
          </div>
          <span className="font-display font-bold text-xl tracking-wide">
            Driving<span className="text-cyan-400">Force</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Method', 'Pricing', 'Fleet', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 text-sm font-semibold backdrop-blur-md">
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
            {['Method', 'Pricing', 'Fleet', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="p-3 hover:bg-white/5 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
             <button className="w-full py-3 rounded-xl font-bold shadow-lg" style={{ background: 'linear-gradient(to right, #0055FF, #00F0FF)' }}>
              Book Lesson
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};