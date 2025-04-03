import { Button } from '@/components/ui/button';
import { sponsors } from '@/lib/data';
import { Atom, Rocket, Calculator, Microscope, School, Lightbulb, BookOpen, Beaker } from 'lucide-react';

export default function SponsorsSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to map icon name to the actual icon component
  const getIconByName = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return <Atom className="h-6 w-6" />;
      case 'Rocket': return <Rocket className="h-6 w-6" />;
      case 'Calculator': return <Calculator className="h-6 w-6" />;
      case 'Microscope': return <Microscope className="h-6 w-6" />;
      case 'School': return <School className="h-6 w-6" />;
      case 'Lightbulb': return <Lightbulb className="h-6 w-6" />;
      case 'BookOpen': return <BookOpen className="h-6 w-6" />;
      case 'Beaker': return <Beaker className="h-6 w-6" />;
      default: return <Atom className="h-6 w-6" />;
    }
  };

  return (
    <section id="sponsors" className="py-20 relative bg-[#242936]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-[#33CCFF]">Sponsors</span></h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Partners who make the Science Circus possible through their generous support
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {sponsors.map((sponsor, index) => (
            <SponsorItem 
              key={index} 
              sponsor={{
                name: sponsor.name,
                icon: getIconByName(sponsor.iconName)
              }} 
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-300 mb-6">Interested in becoming a sponsor?</p>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-primary hover:bg-opacity-80 rounded-full text-lg transition duration-300"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}

interface SponsorProps {
  sponsor: {
    name: string;
    icon: React.ReactNode;
  };
}

function SponsorItem({ sponsor }: SponsorProps) {
  return (
    <div className="bg-[#121628] bg-opacity-50 p-8 rounded-xl flex items-center justify-center transition hover:bg-opacity-70">
      <div className="w-36 h-36 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-white bg-opacity-10 rounded-full mx-auto flex items-center justify-center mb-3">
            <div className="text-3xl text-[#33CCFF]">{sponsor.icon}</div>
          </div>
          <p className="text-lg font-bold">{sponsor.name}</p>
        </div>
      </div>
    </div>
  );
}
