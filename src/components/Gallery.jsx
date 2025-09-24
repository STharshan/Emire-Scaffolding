import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { img: '/1.jpg' },
  { img: '/2.jpg' },
  { img: '/3.jpg' },
  { img: '/4.jpg' },
  { img: '/5.jpg' },
  { img: '/6.jpg' },
  { img: '/7.jpg' },
  { img: '/8.jpg' },
  { img: 'Empire.jpg'}
];

export default function Gallery() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const totalImages = testimonials.length;

  const updateGallery = (newIndex) => {
    setCurrentIndex(newIndex);
    const scroller = scrollRef.current;
    if (!scroller) return;
    const card = scroller.querySelectorAll('[data-card]')[newIndex];
    if (!card) return;
    scroller.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    const newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    updateGallery(newIndex);
  };

  const scrollRight = () => {
    const newIndex = currentIndex === totalImages - 1 ? 0 : currentIndex + 1;
    updateGallery(newIndex);
  };

  return (
    <section className="bg-white py-2 px-4 scroll-m-25" id="gallery">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-semibold text-2xl uppercase mb-10">Gallery</p>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 lg:-left-9 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pr-2 no-scrollbar"
          >
            <div className="flex gap-6 pb-4">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  data-card
                  className="min-w-[400px] px-6 py-5 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition bg-white snap-start"
                >
                  <img
                    src={item.img}
                    alt={`Testimonial ${idx + 1}`}
                    className="w-full h-80 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
