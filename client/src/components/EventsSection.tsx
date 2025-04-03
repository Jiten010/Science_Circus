import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, X } from 'lucide-react';
import { events } from '@/lib/data';
import { apiRequest } from '@/lib/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';

export default function EventsSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-20 relative bg-[#242936]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#121628] opacity-40"></div>
        <img 
          src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Cosmic background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our <span className="text-[#33CCFF]">Events</span></h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Discover our exciting lineup of physics and mathematics themed challenges and games
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} eventId={`event-${index + 1}`} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-primary hover:bg-opacity-80 rounded-full text-lg transition duration-300 transform hover:scale-105"
          >
            Contact Us About Events
          </Button>
        </div>
      </div>
    </section>
  );
}

interface EventProps {
  event: {
    title: string;
    description: string;
    duration: string;
    image: string;
    actionText: string;
  };
  eventId: string;
}

function EventCard({ event, eventId }: EventProps) {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const registerMutation = useMutation({
    mutationFn: async (data: typeof formData & { event_id: string }) => {
      return await apiRequest('POST', '/api/register', data);
    },
    onSuccess: () => {
      toast({
        title: "Registration successful!",
        description: `You are now registered for ${event.title}.`,
      });
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
      setIsDialogOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Registration failed",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerMutation.mutate({
      ...formData,
      event_id: eventId
    });
  };

  return (
    <>
      <div className="bg-gradient-to-br from-[#121628] to-[#242936] rounded-xl overflow-hidden shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(102,51,204,0.2)]">
        <div className="relative h-48">
          <img 
            src={event.image} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121628] to-transparent"></div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
          <p className="text-gray-300 mb-4">
            {event.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-[#33CCFF] flex items-center font-['Exo_2']">
              <Clock className="mr-2 h-4 w-4" /> {event.duration}
            </span>
            <Button 
              size="sm"
              className="bg-primary px-4 py-1 rounded-full hover:bg-opacity-80 transition text-sm"
              onClick={() => setIsDialogOpen(true)}
            >
              {event.actionText}
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#1a1f2e] border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center justify-between">
              Register for {event.title}
              <DialogClose className="rounded-full p-1 hover:bg-gray-700">
                <X className="h-5 w-5" />
              </DialogClose>
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Fill out the form below to register for this event.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-gray-300">Full Name</Label>
              <Input 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className="bg-[#121628] border-gray-700 mt-1" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-300">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                value={formData.email}
                onChange={handleChange}
                className="bg-[#121628] border-gray-700 mt-1" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-gray-300">Phone Number (optional)</Label>
              <Input 
                id="phone" 
                type="tel" 
                value={formData.phone}
                onChange={handleChange}
                className="bg-[#121628] border-gray-700 mt-1" 
              />
            </div>
            
            <DialogFooter className="mt-6">
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-[#2ab3fc]"
                disabled={registerMutation.isPending}
              >
                {registerMutation.isPending ? "Registering..." : "Complete Registration"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
