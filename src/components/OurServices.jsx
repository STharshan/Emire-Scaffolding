import React from "react";
import { FaBuilding, FaTools, FaRuler } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Traditional Tube & Fit Scaffolding",
    description: "Standard scaffolding for various construction needs.",
    icon: <FaBuilding className="text-4xl" />,
  },
  {
    id: 3,
    title: "Full Supply, Erection, and Dismantling of Scaffolding",
    description: "They handle all stages of scaffolding work.",
    icon: <FaTools className="text-4xl" />,
  },
  {
    id: 4,
    title: "Projects of Any Size",
    description: "From small towers to high-rise commercial buildings.",
    icon: <FaRuler className="text-4xl" />,
  },
  {
    id: 5,
    title: "Plettac System Scaffolding",
    description: "Modular system scaffolding, suitable for complex or high-rise projects.",
    icon: <FaBuilding className="text-4xl" />,
  },
];

const OurServices = () => {
  return (
    <section className="py-12 px-6 bg-gray-50 scroll-m-15" id="our-services">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center p-6 rounded-lg text-white hover:shadow-lg transition-all duration-300 bg-blue-600 hover:z-10 hover:bg-blue-700 hover:scale-105">
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
