import { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#242936]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121628] opacity-80"></div>
        <img 
          src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Cosmic background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact <span className="text-[#33CCFF]">Us</span></h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Have questions about Science Circus? We'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#121628] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#33CCFF]" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#121628] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#33CCFF]" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#121628] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#33CCFF]" 
                  placeholder="Event Inquiry"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</Label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full px-4 py-3 bg-[#121628] border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#33CCFF]" 
                  placeholder="Your message here..."
                  required
                />
              </div>
              <div>
                <Button 
                  type="submit" 
                  className="w-full py-3 bg-primary hover:bg-opacity-80 rounded-lg transition duration-300"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <ContactInfo icon={<MapPin />} title="Location">
                Science Building,<br />
                University Campus,<br />
                123 Education Street,<br />
                Cityville, CV 12345
              </ContactInfo>
              
              <ContactInfo icon={<Mail />} title="Email">
                info@sciencecircus.edu<br />
                events@sciencecircus.edu
              </ContactInfo>
              
              <ContactInfo icon={<Phone />} title="Phone">
                +1 (555) 123-4567<br />
                +1 (555) 987-6543
              </ContactInfo>
            </div>
            
            <div className="mt-8 lg:mt-0">
              <h4 className="text-xl font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <SocialIcon icon={<Facebook className="h-5 w-5" />} />
                <SocialIcon icon={<Twitter className="h-5 w-5" />} />
                <SocialIcon icon={<Instagram className="h-5 w-5" />} />
                <SocialIcon icon={<Linkedin className="h-5 w-5" />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function ContactInfo({ icon, title, children }: ContactInfoProps) {
  return (
    <div className="flex items-start space-x-6">
      <div className="text-[#33CCFF] text-2xl mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-gray-300">
          {children}
        </p>
      </div>
    </div>
  );
}

interface SocialIconProps {
  icon: React.ReactNode;
}

function SocialIcon({ icon }: SocialIconProps) {
  return (
    <a href="#" className="w-12 h-12 rounded-full bg-[#121628] bg-opacity-50 flex items-center justify-center hover:bg-primary transition">
      {icon}
    </a>
  );
}
