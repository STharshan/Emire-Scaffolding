import { Phone, Mail } from "lucide-react";

const CallToAction = () => {

  return (
    <section id="contact" className="bg-linear-to-r from-blue-800 to-gray-900 text-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-3xl font-bold mb-4 max-w-sm sm:max-w-xl mx-auto">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg sm:text-base text-white mb-8 max-w-lg mx-auto">
          Get a free, no-obligation quote for your scaffolding needs. Our experts
          are ready to help.
        </p>

        {/* Responsive Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {/* Call Now Button */}
          <a
            href="tel:01159641600"
            className="flex items-center justify-center gap-2 bg-white text-black font-medium px-5 py-3 rounded-md shadow hover:bg-gray-300 transition w-full"
          >
            <Phone size={18} />
            Call Now: 01159 641 600
          </a>

          {/* Email Quote Button */}
          <a
            href="mailto:Shay@empirescaffolding.co.uk"
            className="flex items-center justify-center gap-2 border border-white px-5 py-3 rounded-md text-white hover:bg-white hover:text-blue-700 transition w-full"
          >
            <Mail size={18} />
            Email Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
