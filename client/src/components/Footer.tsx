import { Link } from 'wouter';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#121628] py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-primary rounded-full opacity-70"></div>
                <div className="absolute inset-1 bg-[#33CCFF] rounded-full opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-bold text-lg text-white">SC</span>
                </div>
              </div>
              <span className="text-xl font-bold">Science Circus</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Science Circus brings the wonders of physics and mathematics to life through interactive and engaging events.
              Join us for an unforgettable journey through the laws that govern our universe.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Facebook className="h-4 w-4" />} />
              <SocialLink icon={<Twitter className="h-4 w-4" />} />
              <SocialLink icon={<Instagram className="h-4 w-4" />} />
              <SocialLink icon={<Linkedin className="h-4 w-4" />} />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><FooterLink onClick={() => scrollToSection('about')}>About Us</FooterLink></li>
              <li><FooterLink onClick={() => scrollToSection('events')}>Events</FooterLink></li>
              <li><FooterLink onClick={() => scrollToSection('gallery')}>Gallery</FooterLink></li>
              <li><FooterLink onClick={() => scrollToSection('sponsors')}>Sponsors</FooterLink></li>
              <li><FooterLink onClick={() => scrollToSection('team')}>Team</FooterLink></li>
              <li><FooterLink onClick={() => scrollToSection('contact')}>Contact</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates about upcoming events.
            </p>
            <form className="flex">
              <Input 
                type="email" 
                className="w-full px-4 py-2 bg-[#242936] border border-gray-600 rounded-l-lg focus:ring-2 focus:ring-[#33CCFF]" 
                placeholder="Your email"
              />
              <Button type="submit" className="px-4 py-2 bg-primary hover:bg-opacity-80 rounded-r-lg transition">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Science Circus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

interface SocialLinkProps {
  icon: React.ReactNode;
}

function SocialLink({ icon }: SocialLinkProps) {
  return (
    <a href="#" className="text-gray-400 hover:text-[#33CCFF] transition">
      {icon}
    </a>
  );
}

interface FooterLinkProps {
  onClick: () => void;
  children: React.ReactNode;
}

function FooterLink({ onClick, children }: FooterLinkProps) {
  return (
    <button onClick={onClick} className="hover:text-[#33CCFF] transition">
      {children}
    </button>
  );
}
