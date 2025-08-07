import { Building, Home, CheckCircle } from "lucide-react";

const services = [
  {
    title: "Commercial",
    subtitle: "Large-scale projects",
    icon: <Building className="w-7 h-8" />,
    image: "/image.png", // 
    items: [
      "Office buildings & high-rises",
      "Industrial facilities",
      "Retail & commercial spaces",
      "Complex structural projects",
    ],
    color: "bg-blue-800 text-white",
  },
  {
    title: "Domestic",
    subtitle: "Residential solutions",
    icon: <Home className="w-7 h-7" />,
    image: "", // Leave blank for placeholder or add image path
    items: [
      "House renovations & extensions",
      "Roof repairs & maintenance",
      "Painting & decorating access",
      "Garden & outdoor projects",
    ],
    color: "bg-slate-800 text-white",
  },
];

const OurServices = () => {
  return (
    <section id="services" className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Our Services</h2>
        <p className="text-gray-800 mb-12 text-lg sm:text-lg max-w-xl mx-auto">
          Comprehensive scaffolding solutions for all your commercial and domestic needs
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-start h-110"
            >
              {/* Title and icon */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg ${service.color}`}>{service.icon}</div>
                <div>
                  <h3 className="font-semibold text-xl text-left">{service.title}</h3>
                  <p className="text-sm text-gray-800">{service.subtitle}</p>
                </div>
              </div>

              {/* Image or placeholder */}
              <div className={`w-full h-48 rounded-lg overflow-hidden mb-4 ${!service.image && 'bg-gray-200'}`}>
                <img
                  src={service.image || '/noimage.png'}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* List */}
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
