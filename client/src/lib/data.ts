// Using string identifiers for icons instead of JSX elements
export const events = [
  {
    title: "Anti-Quiz",
    description: "A mind-bending quiz that challenges your physics knowledge in unexpected ways. Think you know science? Think again!",
    duration: "2 Hours",
    image: "/assets/anti-quiz.png",
    actionText: "Register"
  },
  {
    title: "Physics Squid Game",
    description: "Survive a series of physics-based challenges that test your understanding of mechanics, energy, and problem-solving.",
    duration: "3 Hours",
    image: "/assets/squid.png",
    actionText: "Register"
  },
  {
    title: "Math Tricks Stalls",
    description: "Explore fascinating mathematical tricks, illusions, and puzzles through interactive stalls and demonstrations.",
    duration: "Ongoing",
    image: "/assets/stalls.png",
    actionText: "Visit"
  },
  {
    title: "Treasure Hunt",
    description: "Follow scientific clues and solve physics-based puzzles to find hidden treasures across the event grounds.",
    duration: "4 Hours",
    image: "/assets/treasure-hunt.png",
    actionText: "Register"
  }
];

export const galleryImages = [
  {
    src: "https://i.postimg.cc/XpMTW3XL/IMG-4811.jpg"/*,
    title: "Physics Workshop",
    description: "Interactive demonstration of quantum principles"*/
  },
  {
    src: "https://i.postimg.cc/wRk5nh7S/IMG-4901.jpg"/*,
    title: "Mathematical Patterns",
    description: "Exploring geometry in nature and technology"*/
  },
  {
    src: "https://i.postimg.cc/pp23rCY5/IMG-4883.jpg"/*,
    title: "Team Challenge",
    description: "Students collaborating on physics problems"*/
  },
  {
    src: "https://i.postimg.cc/K47dmwLy/IMG-4884.jpg"/*,
    title: "Light Experiments",
    description: "Exploring the properties of light and color"*/
  },
  {
    src: "https://i.postimg.cc/tZWNN0yR/IMG-4930.jpg"/*,
    title: "Robotics Display",
    description: "Showcasing technology and engineering principles"*/
  },
  {
    src: "https://i.postimg.cc/XZFsQBk0/20240228080854-IMG-5403.jpg"/*,
    title: "Interactive Display",
    description: "Hands-on learning about cosmic phenomena"*/
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
