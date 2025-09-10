import { Link } from "react-router-dom";
import { Building, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1224] text-white px-4 py-12 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid gap-15 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/Logo.png" // replace with your image path
              alt="Empire Scaffolding Logo"
              className="w-40 h-14 object-contain"
            />
          </div>
          <p className="text-sm text-gray-300">
            Established in April 2000, Empire Scaffolding (GB) Ltd specialise in professional scaffolding solutions across the Midlands and throughout the UK.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact Info</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-1 text-blue-600" />
              <a href="tel:+01159641600" className="hover:text-blue-600 transition">
                01159 641 600
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1 text-blue-600" />
              <a
                href="mailto:Shay@empirescaffolding.co.uk"
                className="hover:text-blue-600 transition"
                target="_blank"
                rel="noopener noreferrer"
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
                className="hover:text-blue-600 transition"
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

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link
                to="/terms&condition" // Redirects to the Terms & Conditions page
                className="hover:text-blue-600 transition"
              >
                Term & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy-policy" // Assuming you have a privacy policy page as well
                className="hover:text-blue-600 transition"
              >
                Privacy Policy
              </Link>
            </li>
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
