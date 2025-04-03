// Using string identifiers for icons instead of JSX elements
export const events = [
  {
    title: "Anti-Quiz",
    description: "A mind-bending quiz that challenges your physics knowledge in unexpected ways. Think you know science? Think again!",
    duration: "2 Hours",
    image: "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    actionText: "Register"
  },
  {
    title: "Physics Squid Game",
    description: "Survive a series of physics-based challenges that test your understanding of mechanics, energy, and problem-solving.",
    duration: "3 Hours",
    image: "https://images.unsplash.com/photo-1624948465027-6f9b51067557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    actionText: "Register"
  },
  {
    title: "Math Tricks Stalls",
    description: "Explore fascinating mathematical tricks, illusions, and puzzles through interactive stalls and demonstrations.",
    duration: "Ongoing",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    actionText: "Visit"
  },
  {
    title: "Treasure Hunt",
    description: "Follow scientific clues and solve physics-based puzzles to find hidden treasures across the event grounds.",
    duration: "4 Hours",
    image: "https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    actionText: "Register"
  }
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1581093458791-9d3fd7570b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Physics Workshop",
    description: "Interactive demonstration of quantum principles"
  },
  {
    src: "https://images.unsplash.com/photo-1576319155264-99536e0be1ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Mathematical Patterns",
    description: "Exploring geometry in nature and technology"
  },
  {
    src: "https://images.unsplash.com/photo-1554475900-0a0350e3fc7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Team Challenge",
    description: "Students collaborating on physics problems"
  },
  {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Light Experiments",
    description: "Exploring the properties of light and color"
  },
  {
    src: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Robotics Display",
    description: "Showcasing technology and engineering principles"
  },
  {
    src: "https://images.unsplash.com/photo-1517976487492-5750f3195933?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Interactive Display",
    description: "Hands-on learning about cosmic phenomena"
  }
];

export interface Sponsor {
  name: string;
  iconName: string;
}

export const sponsors: Sponsor[] = [
  {
    name: "PhysicsTech",
    iconName: "Atom"
  },
  {
    name: "SpaceX",
    iconName: "Rocket"
  },
  {
    name: "MathWorks",
    iconName: "Calculator"
  },
  {
    name: "SciLabs",
    iconName: "Microscope"
  },
  {
    name: "National Science Foundation",
    iconName: "School"
  },
  {
    name: "Innovate Inc.",
    iconName: "Lightbulb"
  },
  {
    name: "SciEdu Publishers",
    iconName: "BookOpen"
  },
  {
    name: "ChemTech",
    iconName: "Beaker"
  }
];

export const teamMembers = [
  {
    name: "Dr. Alex Morgan",
    role: "Event Director",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Physics Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Prof. Michael Davis",
    role: "Mathematics Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Dr. Emily Rodriguez",
    role: "Technology Coordinator",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];
