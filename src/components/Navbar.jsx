import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Services", href: "our-services" },
    { label: "Recent Projects", href: "recent-projects" },
    { label: "Gallery", href: "gallery" },
    { label: "Testimonials", href: "testimonials" },
    { label: "Contact", href: "contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // height of your fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setIsOpen(false); // close mobile menu
    }
  };

  // Handle phone call
  const handleCall = () => {
    console.log("Calling 01159 641 600");
    // You can add additional actions here, such as tracking or analytics
  };

  return (
    <header className="w-full bg-black border-b fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between py-3 px-4 sm:px-10">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-40 h-14">
            <img
              src="/Logo.png"
              alt="Empire Scaffolding Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium text-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="hover:text-blue-600 transition"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right - Phone + Quote button */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <Phone className="w-4 h-4" />
            <a
              href="tel:01159641600"
              onClick={handleCall}  // Trigger handleCall when clicked
              className="whitespace-nowrap font-semibold"
            >
              01159 641 600
            </a>
          </div>
          <a
            href="mailto:Shay@empirescaffolding.co.uk"
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center gap-4 py-6 text-lg">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className="hover:text-blue-600 transition"
            >
              {link.label}
            </button>
          ))}

          <div className="flex items-center gap-2 text-white">
            <Phone className="w-4 h-4" />
            <a
              href="tel:01159641600"
              onClick={handleCall}  // Trigger handleCall when clicked
              className="whitespace-nowrap font-semibold"
            >
              01159 641 600
            </a>
          </div>
          <a
            href="mailto:Shay@empirescaffolding.co.uk"
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Get Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
