import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 h-[111px] bg-white/70 backdrop-blur-[4px]">

  {/* Gradient white-to-transparent background */}
  <div
    className="absolute inset-0 transition-all duration-500"
  />

  {/* Backdrop blur */}
  <div
    className="absolute inset-0 backdrop-blur-md transition-all duration-500"
  />

      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 relative z-10">
        {/* Logo - left */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-[47.89px] w-[97px]" />
          </Link>
        </div>

        {/* Center Desktop Links */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8 font-[MAINLUX-SemiBold] text-[16px] font-normal leading-[120%] tracking-[0] text-gray-800">
        <li>
          <Link
            to="/"

            className="transition duration-200 hover:text-[#F7BD01] hover:drop-shadow-[0_0_6px_#F7BD01]"
          >
            Home
          </Link>
        </li>

          <li>

            <Link
              to="/about"
              className="transition duration-200 hover:text-[#F7BD01] hover:drop-shadow-[0_0_6px_#F7BD01]"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/services"

              className="transition duration-200 hover:text-[#F7BD01] hover:drop-shadow-[0_0_6px_#F7BD01]"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/properties"
              className="transition duration-200 hover:text-[#F7BD01] hover:drop-shadow-[0_0_6px_#F7BD01]"
            >
              Properties
            </Link>
          </li>

        </ul>


        {/* Right Side Button */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="flex items-center justify-center font-[MAINLUX-SemiBold] w-[107px] h-[40px] rounded-[15px] text-black font-medium hover:opacity-90 transition-opacity duration-200"
            style={{ background: "#F7BD01" }}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-lg shadow-lg">
          <ul className="flex flex-col space-y-4 p-4 font-[MAINLUX-SemiBold] text-[16px] font-normal leading-[120%] tracking-[0] text-gray-800">
            <li>
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="block py-2 active:text-[#F7BD01]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="block py-2 active:text-[#F7BD01]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => setMenuOpen(false)}
                className="block py-2 active:text-[#F7BD01]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/properties"
                onClick={() => setMenuOpen(false)}
                className="block py-2 active:text-[#F7BD01]"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="font-[MAINLUX-SemiBold] w-full h-[40px] rounded-[15px] p-[10px] text-black font-medium flex items-center justify-center mt-2"
                style={{ background: "#F7BD01" }}
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}

    </nav>
  );
}

export default Navbar;