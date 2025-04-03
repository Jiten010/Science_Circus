import { Atom, Calculator, Lightbulb, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About <span className="text-[#33CCFF]">Science Circus</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold mb-6">Where Science Meets Entertainment</h3>
            <p className="text-lg mb-6 text-gray-300">
              Science Circus is an immersive event that brings together the wonder of physics and mathematics in an entertaining format. 
              We believe that learning should be fun, interactive, and memorable.
            </p>
            <p className="text-lg mb-8 text-gray-300">
              Through carefully designed activities, games, and challenges, participants will explore scientific concepts, solve puzzles, 
              and witness the beauty of mathematical patterns that govern our universe.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Feature icon={<Atom className="h-6 w-6" />}>
                Physics Exploration
              </Feature>
              <Feature icon={<Calculator className="h-6 w-6" />}>
                Mathematical Challenges
              </Feature>
              <Feature icon={<Lightbulb className="h-6 w-6" />}>
                Interactive Learning
              </Feature>
              <Feature icon={<Users className="h-6 w-6" />}>
                Team Collaboration
              </Feature>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl animate-[float_6s_ease-in-out_infinite]">
              <img 
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Physics experiment with light trails" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121628] to-transparent opacity-40"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

function Feature({ icon, children }: FeatureProps) {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-[#33CCFF] text-2xl">{icon}</div>
      <span>{children}</span>
    </div>
  );
}
