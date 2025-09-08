import { Building, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1224] text-white px-4 py-12 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/Logo.png"         // replace with your image path
              alt="Empire Scaffolding Logo"
              className="w-40 h-14 object-contain"
            />
          </div>
          <p className="text-sm text-gray-300">
            Established in April 2000, Empire Scaffolding (GB) Ltd specialise in professional
            scaffolding solutions across the Midlands and throughout the UK.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-blue-600" />
              <a
                href="tell:+441159641600"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-500 transition"
              >
                01159 641 600
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1 text-blue-600" />
              <a
                href="mailto:Shay@empirescaffolding.co.uk"
                className="hover:text-blue-400 transition"
                target="_blank"
              >
                info@empirescaffolding.co.uk
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-blue-600" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Bakerbrook+Industrial+Estate,+Wigwam+Lane,+Hucknall,+Nottingham+NG15+7SZ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                Bakerbrook Industrial Estate <br />
                Wigwam Lane, Hucknall <br />
                Nottingham NG15 7SZ
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Commercial Scaffolding</li>
            <li>Domestic Scaffolding</li>
            <li>Emergency Services</li>
            <li>Safety Inspections</li>
            <li>Industrial Scaffolding</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2025 Empire Scaffolding (GB) Ltd. All rights reserved.
      </div>
      <div className="mt-2 text-center font-semibold">
        <p>
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
