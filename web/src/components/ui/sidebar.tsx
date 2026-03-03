import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-5 lg:px-10">
      {/* Logo */}
      <a href="#" className="text-black font-mono text-2xl lg:text-3xl tracking-wider">
        jazmine trinh
      </a>

      {/* Desktop nav */}
      <div className="hidden sm:flex items-center gap-1">
        <Link to="/"        className="text-black font-mono underline hover:bg-white rounded-full px-4 py-2 text-lg lg:text-xl">home</Link>
        <Link to="/about"   className="text-black font-mono underline hover:bg-white rounded-full px-4 py-2 text-lg lg:text-xl">about</Link>
        <Link to="/writings" className="text-black font-mono underline hover:bg-white rounded-full px-4 py-2 text-lg lg:text-xl">writings</Link>
        <a
          href="resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-mono underline hover:bg-white rounded-full px-4 py-2 text-lg lg:text-xl"
        >
          resume
        </a>
      </div>

      {/* Mobile hamburger button */}
      <button
        className="sm:hidden text-black p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-blue-300 flex flex-col items-start px-6 py-4 gap-3 shadow-md sm:hidden">
          <Link to="/"        onClick={() => setMenuOpen(false)} className="text-black font-mono underline text-xl py-1">home</Link>
          <Link to="/about"   onClick={() => setMenuOpen(false)} className="text-black font-mono underline text-xl py-1">about</Link>
          <Link to="/writings" onClick={() => setMenuOpen(false)} className="text-black font-mono underline text-xl py-1">writings</Link>
          <a
            href="resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="text-black font-mono underline text-xl py-1"
          >
            resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Sidebar;