import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink, scroller } from "react-scroll"; // Import scroller from react-scroll
import MonifyLogo from "../assets/MonifyLogo.svg";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLinkClick = () => {
    setNav(false); // Close the menu after clicking a link
  };

  const handleContactClick = () => {
    // Close the menu
    setNav(false);
    // Navigate to the homepage first
    if (window.location.pathname !== "/") {
      navigate("/");

      // Wait for the navigation to complete before scrolling
      setTimeout(() => {
        scroller.scrollTo("contact-section", {
          smooth: true,
          duration: 500,
          offset: -70, // Adjust for any fixed headers
        });
      }, 300); // Slightly increase the delay to ensure the DOM is ready
    } else {
      // If already on the homepage, scroll directly
      scroller.scrollTo("contact-section", {
        smooth: true,
        duration: 500,
        offset: -70, // Adjust for any fixed headers
      });
    }
  };

  const navLinks = [
    { path: "/about", name: "About" },
    { path: "/faq", name: "FAQ" },
    { path: "contact-section", name: "Contact" }, // Updated path for Contact
  ];

  return (
    <nav className="bg-green-200 fixed top-0 left-0 w-full z-50 flex items-center h-18 px-6">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center space-x-2">
        <img
          src={MonifyLogo}
          alt="Monify Logo"
          className="h-8 w-8" // Adjust the size of the logo as needed
        />
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")} // Navigate to the homepage
        >
          Monify
        </h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-grow justify-center">
        <ul className="flex space-x-6">
          {navLinks.map(({ path, name }) => (
            <li key={path}>
              {path === "contact-section" ? (
                <button
                  onClick={handleContactClick} // Use the custom handler for Contact
                  className="cursor-pointer hover:text-gray-500"
                >
                  {name}
                </button>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-900 font-bold" : "hover:text-gray-500"
                  }
                >
                  {name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center ml-auto z-30">
        <div onClick={handleNav} className="text-2xl cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-green-200 shadow-md transform ${
          nav ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden z-20 flex items-center justify-center`}
      >
        <ul className="text-xl space-y-4 uppercase text-center">
          {navLinks.map(({ path, name }) => (
            <li key={path} className="p-2">
              {path === "contact-section" ? (
                <button
                  onClick={handleContactClick}
                  className="cursor-pointer hover:text-gray-200"
                >
                  {name}
                </button>
              ) : (
                <NavLink
                  to={path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "hover:text-gray-200"
                  }
                >
                  {name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
