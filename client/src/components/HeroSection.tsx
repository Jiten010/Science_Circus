import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121628] opacity-80"></div>
        <img 
          src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Cosmic background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-[float_6s_ease-in-out_infinite]">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Science Circus</span>
            <span className="text-[#33CCFF]">Physics & Mathematics</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience the wonders of science through interactive games, puzzles, and exhibits.
            Join us for an unforgettable journey through the laws of physics and mathematical marvels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('events')}
              className="px-8 py-3 bg-primary hover:bg-opacity-80 rounded-full text-lg transition duration-300 transform hover:scale-105"
            >
              Explore Events
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline" 
              className="px-8 py-3 border-2 border-[#33CCFF] hover:bg-[#33CCFF] hover:bg-opacity-20 rounded-full text-lg transition duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-4xl opacity-70 hover:opacity-100 transition"
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
}
