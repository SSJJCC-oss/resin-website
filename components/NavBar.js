'use client';

const Navbar = () => {
  return (
    <nav className="bg-turquoise-900 w-full p-4 fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        {/* Logo or Home Anchor */}
        <a href="#home" className="text-white text-xl font-bold hover:text-turquoise-400 transition-colors">
          Resin Products
        </a>

        {/* Navigation Links */}
        <div className="space-x-6">
          <a
            href="#gallery"
            className="text-white text-lg hover:text-turquoise-300 transition-colors"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-white text-lg hover:text-turquoise-300 transition-colors"
          >
            Contact
          </a>
          <a
            href="#about"
            className="text-white text-lg hover:text-turquoise-300 transition-colors"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
