import { galleryImages } from '@/lib/data';

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Event <span className="text-[#33CCFF]">Gallery</span></h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Glimpses from our previous science events and activities
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} image={image} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center text-[#33CCFF] hover:text-white transition">
            <span className="mr-2">View More Photos</span>
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 12H4.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

interface GalleryItemProps {
  image: {
    src: string;
    title: string;
    description: string;
  };
}

function GalleryItem({ image }: GalleryItemProps) {
  return (
    <div className="relative overflow-hidden rounded-xl group">
      <img 
        src={image.src} 
        alt={image.title} 
        className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#121628] to-transparent opacity-0 group-hover:opacity-80 transition duration-300 flex items-end p-6">
        <div>
          <h4 className="text-xl font-bold">{image.title}</h4>
          <p className="text-gray-300">{image.description}</p>
        </div>
      </div>
    </div>
  );
}
