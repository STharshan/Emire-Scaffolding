import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Council House Dome",
    location: "Nottingham",
    description:
      "Complex scaffolding solution for historic civic building restoration, providing safe access for dome maintenance and architectural preservation work.",
    image: "/council.png", // update path as needed
    tags: ["Historic Building", "Complex Access", "Civic Project"],
  },
  {
    title: "Victoria Law Courts",
    location: "Birmingham",
    description:
      "Comprehensive scaffolding installation for major Victorian courthouse renovation, ensuring complete building envelope coverage for restoration works.",
    image: "/victoria.png",
    tags: ["Victorian Architecture", "Full Coverage", "Legal Institution"],
  },
  {
    title: "Sir John Robinson House",
    location: "Daybrook, Arnold",
    description:
      "Multi-level scaffolding system for modern institutional building maintenance, providing safe working platforms across multiple floors and sections.",
    image: "/robinson.png",
    tags: ["Multi-Level", "Institutional", "Modern Building"],
  },
];

const RecentProjects = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Recent Projects</h2>
        <p className="text-gray-600 mb-10 text-md sm:text-lg max-w-xl mx-auto">
          Showcasing our expertise in high-profile commercial and institutional scaffolding projects
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden text-left flex flex-col"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-58 object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Commercial
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
                <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs border border-gray-300 text-black px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-blue-700 transition">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
