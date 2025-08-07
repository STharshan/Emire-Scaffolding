import { Building, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0B1224] text-white px-4 py-12 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Building className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-semibold">
              Empire Scaffolding (GB) Ltd
            </h4>
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
              <Phone className="w-4 h-4 mt-1 text-blue-500" />
              01159 641 600
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-1 text-blue-500" />
              info@empirescaffolding.co.uk
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1 text-blue-500" />
              <span>
                Bakerbrook Industrial Estate <br />
                Wigwam Lane, Hucknall <br />
                Nottingham NG15 7SZ
              </span>
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
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
        © 2024 Empire Scaffolding (GB) Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
