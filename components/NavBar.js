// components/NavBar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-turquoise-900 w-full p-4 fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <Link href="#home" className="text-white text-xl font-bold">Resin Products</Link>
        <div className="space-x-6">
          <Link href="#gallery" className="text-white text-lg">Gallery</Link>
          <Link href="#contact" className="text-white text-lg">Contact</Link>
          <Link href="#about" className="text-white text-lg">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
