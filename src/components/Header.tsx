import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = ({ onSearch }: { onSearch: () => void }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: "Gallery", path: "/gallery" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex items-center justify-between px-4 md:px-6 py-4 
      bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-xl"
    >
      {/* Logo */}
      <h1
        className="font-bold text-lg md:text-xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        Arte<i className="text-amber-700">Vista</i>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 font-bold text-sm">
        {navLinks.map((link) => (
          <li
            key={link.path}
            className="text-gray-600 hover:text-black cursor-pointer transition"
            onClick={() => navigate(link.path)}
          >
            {link.label}
          </li>
        ))}
      </ul>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="hidden md:flex items-center gap-2">
          
          <button className="flex gap-4 items-center bg-amber-700 text-white px-3 py-2 rounded-full hover:bg-amber-800 transition" onClick={onSearch}>
            Search <FaSearch />
          </button>
        </div>

        {/* Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white/80 backdrop-blur-md shadow-lg flex flex-col gap-4 p-5 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.path}
                  className="font-bold text-sm text-gray-600 hover:text-amber-700 cursor-pointer transition"
                  onClick={() => { navigate(link.path); setOpen(false); }}
                >
                  {link.label}
                </li>
              ))}
            </ul>

            {/* Search Mobile */}
            <div className="flex gap-2 mt-3">
              
              <button className=" flex gap-4 items-center justify-between w-full bg-amber-700 text-white px-3 py-2 rounded-full hover:bg-amber-800 transition" onClick={onSearch}>
                Search... <FaSearch />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;
