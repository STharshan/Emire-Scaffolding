import { Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full flex bg-black items-center justify-between py-2 px-4 sm:px-10 border-b">
      {/* Left - Logo */}
      <div className="flex items-center gap-4">
        {/* Logo Image */}
        <div className="w-50 h-16">
          <img
            src="/Logo.png" // Replace with your logo path
            alt="Empire Scaffolding Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Right - Phone and Button (hidden below md = 768px) */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-2 text-sm text-white">
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
