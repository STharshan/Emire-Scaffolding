import { Shield, Clock, Users, Award } from "lucide-react";

const features = [
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    bg: "bg-blue-800",
    title: "Safety First",
    description: "Fully insured with comprehensive safety protocols and certified equipment",
  },
  {
    icon: <Clock className="w-8 h-8 text-white" />,
    bg: "bg-gray-800",
    title: "Reliable Service",
    description: "On-time delivery and professional installation by experienced teams",
  },
  {
    icon: <Users className="w-8 h-8 text-white" />,
    bg: "bg-blue-800",
    title: "Expert Team",
    description: "Qualified professionals with years of scaffolding experience",
  },
  {
    icon: <Award className="w-8 h-8 text-white" />,
    bg: "bg-gray-800",
    title: "Quality Assured",
    description: "Premium materials and workmanship with satisfaction guarantee",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          Why Choose Empire Scaffolding (GB) Ltd?
        </h2>
        <p className="text-gray-600 mb-12 text-sm sm:text-lg max-w-xl mx-auto">
          We deliver excellence through experience, safety, and professional service
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {features.map((feature, idx) => (
            <div key={idx} className="group flex flex-col items-center transition duration-300">
              {/* Icon wrapper with hover scale */}
              <div
                className={`rounded-full p-4 mb-4 ${feature.bg} transform transition-transform duration-300 group-hover:scale-110`}
              >
                {feature.icon}
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-800 max-w-xs">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
