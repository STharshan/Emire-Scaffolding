import React from 'react';

const testimonials = [
  {
    img: '/1.jpg',  // Add the image URL here
  },
  {
    img: '/2.jpg',  // Add the image URL here
  },
  {
    img: '/3.jpg',  // Add the image URL here
  },
  {
    img: '/4.jpg',  // Add the image URL here
  },
  {
    img: '/5.jpg',  // Add the image URL here
  },
  {
    img: '/6.jpg',  // Add the image URL here
  },
  {
    img: '/7.jpg',  // Add the image URL here
  },
  {
    img: '/8.jpg',  // Add the image URL here
  },
];

const Gallery = () => {
  return (
    <section className="bg-white py-2 px-4 scroll-m-25" id='gallery'>
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="font-semibold text-2xl uppercase mb-10">Gallery</p>

        {/* Testimonials Scroll */}
        <div className="overflow-hidden">
          <div
            className="flex space-x-6 animate-scroll"
            style={{ animationDuration: `${testimonials.length * 4}s`, animationTimingFunction: 'linear' }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="min-w-[300px] px-6 py-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition bg-white"
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={`Testimonial ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
