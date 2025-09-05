import { CheckCircle } from 'lucide-react';

const serviceTypes = [
  'Supply of scaffolding',
  'Professional erection',
  'Safe dismantling',
  'UK-wide quotations',
  "plettac System",
  "Scaffold designs",
  "Scaffold alarms"
];

const About = () => {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 lg:px-16 scroll-m-15" id='about'>
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <span className="inline-block text-sm bg-blue-100 text-blue-800 px-4 py-1 rounded-full font-semibold mb-4">
          Established 2000
        </span>

        {/* Heading and description */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          25 Years of Excellence
        </h2>
        <p className="text-gray-700 mb-8 max-w-xl text-md">
          Empire Scaffolding (GB) Ltd is a family-run company established in 2000, specialising in the supply, erection, and dismantling of scaffolding for commercial, domestic, and industrial projects. With over 60 directly employed CISRS-qualified staff, we combine experience with reliability. Based in Hucknall, Nottinghamshire, we are ideally located in the Midlands, giving us easy access to deliver scaffolding services nationwide.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Lists */}
          <div className="order-1 md:order-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Service Areas */}
            {/* <div>
              <h4 className="font-semibold mb-3">Service Areas</h4>
              <ul className="space-y-2 text-sm">
                {serviceAreas.map((area, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {area}
                  </li>
                ))}
              </ul>
            </div> */}

            {/* Our Services */}
            <div>
              <h4 className="font-semibold mb-3">Our Services</h4>
              <ul className="space-y-2 text-sm">
                {serviceTypes.map((service, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-800">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quote Section (comes before highlight card on small screens) */}
          <div className="order-2 md:order-3 mt-0 md:mt-10 bg-gray-100 p-5 rounded-lg text-left text-sm sm:text-base shadow-sm w-full sm:w-2xl">
            <p className="font-semibold text-gray-700 mb-1">
              "Quotations for larger works carried out throughout the UK"
            </p>
            <p className="text-gray-600">
              No project too big – we provide comprehensive quotes for major projects across the
              entire United Kingdom.
            </p>
          </div>

          {/* Highlight Card */}
          <div className="order-3 md:order-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-6 text-center grid grid-cols-2 md:grid-cols-2 gap-4 items-center w-full lg:w-lg lg:-ml-30 lg:mx-auto">
            <div>
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">60</p>
              <p className="text-sm">CISRS-Trained</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Safety Record</p>
            </div>
            <div>
              <p className="text-3xl font-bold">UK</p>
              <p className="text-sm">Wide Service</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
