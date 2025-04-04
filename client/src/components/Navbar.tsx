import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full bg-opacity-80 bg-[#121628] backdrop-filter backdrop-blur-lg z-50 transition-all duration-300 ${
      scrolled ? 'py-2' : 'py-3'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="https://drive.google.com/file/d/1qDIDsnbCVf9UIZsEjYoF-3kEYVuf5_BP/view?usp=sharing" alt="Science Circus Logo" className="w-12 h-12 object-contain" />
          <span className="text-xl font-bold">Science Circus</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink onClick={() => scrollToSection('events')}>Events</NavLink>
          <NavLink onClick={() => scrollToSection('gallery')}>Gallery</NavLink>
          <NavLink onClick={() => scrollToSection('sponsors')}>Sponsors</NavLink>
          <NavLink onClick={() => scrollToSection('team')}>Team</NavLink>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-opacity-80 px-5 py-2 rounded-full transition"
          >
            Contact
          </Button>
        </div>
        
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-[#242936] absolute w-full transition-all duration-300 ${
        isMenuOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <MobileNavLink onClick={() => scrollToSection('about')}>About</MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('events')}>Events</MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('gallery')}>Gallery</MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('sponsors')}>Sponsors</MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection('team')}>Team</MobileNavLink>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary hover:bg-opacity-80 py-2 px-4 rounded-full transition text-center"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  children: React.ReactNode;
  onClick: () => void;
}

function NavLink({ children, onClick }: NavLinkProps) {
  return (
    <button 
      onClick={onClick}
      className="relative hover:text-[#33CCFF] transition after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-5px] after:left-0 after:bg-[#33CCFF] after:transition-[width] after:duration-300 hover:after:w-full"
    >
      {children}
    </button>
  );
}

function MobileNavLink({ children, onClick }: NavLinkProps) {
  return (
    <button 
      onClick={onClick}
      className="py-2 hover:text-[#33CCFF] transition text-left"
    >
      {children}
    </button>
  );
}
