import { type JSX } from "react";
import { Link } from "react-router-dom";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo_white.svg";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = (): JSX.Element => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Properties", href: "/properties" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    "Nigerian Properties",
    "International Properties",
    "Property Management",
    "Investment Advisory",
    "Legal Guidance",
  ];

  const contactInfo = [
    "19B Adewole Kukui",
    "Lagos, Nigeria",
    "Email: info@stellehomes.com",
    "Phone: +234 912 222 0444",
    "Int'l: +44 7576 842164‬‬",
  ];

  return (
    <footer className="bg-black text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo + Description */}
        <div>
          <img src={logo} alt="Stelle Homes Logo" className="w-15 mb-7" />
          <p className="text-sm leading-relaxed mb-7">
            Your bridge to global real estate
            <br /> 
            opportunities, connecting Nigerian
            <br /> 
            properties to international 
            <br /> 
            investors and opening global 
            <br /> 
            markets to Nigerian clients.
          </p>
          <div className="flex gap-3">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20">
              <FaXTwitter />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20">
              <FaYoutube />
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link, idx) => (
              <li key={idx}>
                {link.href.startsWith("/") ? (
                  <Link
                    to={link.href}
                    className="hover:underline"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a href={link.href} className="hover:underline">
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact Information</h3>
          <ul className="space-y-2 text-sm">
            {contactInfo.map((info, idx) => (
              <li key={idx}>
                {info.includes("Email:") ? (
                  <a href={`mailto:${info.split(": ")[1]}`} className="hover:underline">
                    {info}
                  </a>
                ) : info.includes("Phone:") || info.includes("Int'l:") ? (
                  <a href={`tel:${info.split(": ")[1]}`} className="hover:underline">
                    {info}
                  </a>
                ) : (
                  info
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Stelle Homes. All rights reserved.
      </div>
    </footer>
  );
};
