import React, { useState, useEffect } from 'react';
import { Menu, X, Car, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Corporate', href: '#corporate' },
  ];

  return (
    <>
      <nav 
        className={`
          fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out
          ${isScrolled ? 'w-[90%] md:w-[80%] max-w-5xl' : 'w-full px-6'}
        `}
      >
        <div 
          className={`
            flex items-center justify-between transition-all duration-300
            ${isScrolled 
              ? 'glass-panel rounded-full px-6 py-3 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border-white/10' 
              : 'py-6 bg-transparent'}
          `}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative p-2 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)] group-hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
              <Car className="text-white w-5 h-5 relative z-10" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white font-sans">
              Driving<span className="text-cyan-400">Force</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            <div className={`
              flex items-center gap-1 px-2 py-1 mr-2
              ${isScrolled ? '' : 'glass-panel rounded-full px-4'}
            `}>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-blue-100/70 hover:text-white transition-all rounded-full hover:bg-white/5 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <button className="btn-liquid px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600/80 to-cyan-500/80 hover:from-blue-500 hover:to-cyan-400 border border-white/20 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              Book Lesson
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xl md:hidden flex items-center justify-center p-6 animate-in fade-in">
          <div className="w-full max-w-sm glass-panel rounded-3xl p-8 flex flex-col gap-6 relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl -mr-10 -mt-10"></div>
             
             <div className="flex justify-between items-center mb-4">
               <span className="text-2xl font-bold">Menu</span>
               <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-white/10"><X /></button>
             </div>
             
             {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className="text-xl font-medium text-white/90 py-3 border-b border-white/5 hover:text-cyan-400 hover:pl-2 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 btn-liquid bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2">
              Book Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};