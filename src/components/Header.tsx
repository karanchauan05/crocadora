
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Chess Club", href: "#chess-club" },
    { name: "Badminton Club", href: "#badminton-club" },
    { name: "Anime Club", href: "#anime-club" },
    { name: "Book Club", href: "#book-club" },
    { name: "Meetups", href: "#meetups" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-subtle" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="text-2xl font-display font-semibold text-crocadora-700 z-50"
        >
          Crocadora
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-crocadora-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#join" 
            className="px-5 py-2 bg-crocadora-600 text-white rounded-full text-sm font-medium hover:bg-crocadora-700 transition-colors"
          >
            Join Community
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div className={cn(
          "fixed inset-0 bg-white flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-800 hover:text-crocadora-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#join"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-3 bg-crocadora-600 text-white rounded-full text-base font-medium hover:bg-crocadora-700 transition-colors"
            >
              Join Community
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
