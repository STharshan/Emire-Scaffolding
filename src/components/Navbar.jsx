// src/components/HeaderBar.jsx
import { Building, Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-10 py-4 border-b bg-white">
      {/* Left - Logo & Company Info */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="bg-blue-700 text-white p-3 rounded-lg">
          <Building className="w-6 h-6" />
        </div>

        {/* Text */}
        <div>
          <h1 className="font-semibold text-2xl sm:text-lg">
            Empire Scaffolding (GB) Ltd
          </h1>
          <p className="text-sm text-gray-800">Professional Scaffolding Solutions</p>
        </div>
      </div>

      {/* Right - Phone and Button (hidden below md = 768px) */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-gray-800">
          <Phone className="w-4 h-4" />
          <span className="whitespace-nowrap font-semibold">01159 641 600</span>
        </div>
        <a
          href="mailto:Shay@empirescaffolding.co.uk"
          className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
        >
          Get Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;
