import React from "react";
import { FaBuilding, FaTools, FaRuler, FaCogs } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Traditional Tube & Fit Scaffolding",
    description: "Standard scaffolding for various construction needs.",
    icon: <FaBuilding className="text-4xl" />, // Replaced with an actual icon
  },
  // {
  //   id: 2,
  //   title: "Specialised Refurbishment Work",
  //   description: "Projects requiring monoflexing to council specifications or working near train lines.",
  //   icon: <FaCogs className="text-4xl" />, // Replaced with an actual icon
  // },
  {
    id: 3,
    title: "Full Supply, Erection, and Dismantling of Scaffolding",
    description: "They handle all stages of scaffolding work.",
    icon: <FaTools className="text-4xl" />, // Replaced with an actual icon
  },
  {
    id: 4,
    title: "Projects of Any Size",
    description: "From small towers to high-rise commercial buildings.",
    icon: <FaRuler className="text-4xl" />, // Replaced with an actual icon
  },
  {
    id: 5,
    title: "plettac System Scaffolding",
    description: "Modular system scaffolding, suitable for complex or high-rise projects.",
    icon: <FaBuilding className="text-4xl" />, // Replaced with an actual icon
  },
];

const OurServices = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 scroll-m-15" id="our-services">
      <div className="container mx-auto text-center max-w-6xl">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-6 border rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-300 relative bg-blue-500">   
              <div className="bg-blue-800 p-4 rounded-full mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
