import { Linkedin, Twitter, Mail } from 'lucide-react';
import { teamMembers } from '@/lib/data';

export default function TeamSection() {
  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-[#33CCFF]">Team</span></h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Meet the brilliant minds behind Science Circus
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: string;
  };
}

function TeamMember({ member }: TeamMemberProps) {
  return (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-xl">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full aspect-square object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121628] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-primary bg-opacity-40 opacity-0 transition duration-300 flex items-center justify-center group-hover:opacity-100">
          <div className="flex space-x-4">
            <SocialButton>
              <Linkedin className="h-4 w-4" />
            </SocialButton>
            <SocialButton>
              <Twitter className="h-4 w-4" />
            </SocialButton>
            <SocialButton>
              <Mail className="h-4 w-4" />
            </SocialButton>
          </div>
        </div>
      </div>
      <div className="pt-4 text-center">
        <h4 className="text-xl font-bold">{member.name}</h4>
        <p className="text-[#33CCFF]">{member.role}</p>
      </div>
    </div>
  );
}

interface SocialButtonProps {
  children: React.ReactNode;
}

function SocialButton({ children }: SocialButtonProps) {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-40 transition"
    >
      {children}
    </a>
  );
}
