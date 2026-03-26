import { useState } from "react";
import { Link } from "react-router-dom";
// Added MdKeyboardArrowRight for the dropdown hover arrow
import { MdOutlineKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import Logo from "./pages/logo/Logo";

export default function NavbarLink() {
  const [dropdowns, setDropdowns] = useState({
    services: false,
    blog: false,
    project: false,
  });

  const handleMouseEnter = (key) => {
    setDropdowns({ ...dropdowns, [key]: true });
  };

  const handleMouseLeave = (key) => {
    setDropdowns({ ...dropdowns, [key]: false });
  };

  return (
    <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[225px] p-2 sm:p-3 text-white flex-wrap md:flex-nowrap w-full">
      <Logo />

      <nav className="flex items-center flex-shrink-0">
        {/* Links */}
        <ul className="flex list-none gap-2 items-center">

          <li>
            <Link className="py-2 px-3 rounded-md hover:text-[#FF014F] transition duration-200 font-bold">
              Home
            </Link>
          </li>

          <li>
            <Link className="py-2 px-3 rounded-md hover:text-[#FF014F] transition duration-200 font-bold">
              About
            </Link>
          </li>

          {/* Services */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={() => handleMouseLeave("services")}
          >
            <span className={`flex items-center py-2 px-3 rounded-md hover:text-[#FF014F] transition duration-200 font-bold cursor-pointer ${dropdowns.services ? "text-[#FF014F]" : ""}`}>
              Services
              <MdOutlineKeyboardArrowDown
                className={`transition duration-300 ml-1 ${dropdowns.services ? "rotate-180" : ""
                  }`}
              />
            </span>

            {dropdowns.services && (
              <ul className="absolute top-full left-0 w-48 bg-[#141414] rounded-xl shadow-lg    p-2 flex flex-col gap-1 z-50">
                <li>
                  <Link className="group flex text-[16px] justify-between items-center px-4 py-2 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition duration-300 text-sm font-semibold hover:translate-x-3">
                    Services
                    <MdKeyboardArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
                <li>
                  <Link className="group flex text-[16px] justify-between items-center px-4 py-2 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition duration-300 text-sm font-semibold hover:translate-x-3">
                    Services Details
                    <MdKeyboardArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Blog */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("blog")}
            onMouseLeave={() => handleMouseLeave("blog")}
          >
            <span className={`flex items-center py-2 px-3 rounded-md hover:text-[#FF014F] transition duration-200 font-bold cursor-pointer ${dropdowns.blog ? "text-[#FF014F]" : ""}`}>
              Blog
              <MdOutlineKeyboardArrowDown
                className={`transition duration-300 ml-1 ${dropdowns.blog ? "rotate-180" : ""
                  }`}
              />
            </span>

            {dropdowns.blog && (
              <ul className="absolute top-full left-0 w-48 bg-[#141414] rounded-xl shadow-lg    p-2 flex flex-col gap-1 z-50">
                <li>
                  <Link className="group flex text-[16px] justify-between items-center px-4 py-2 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition duration-300 text-sm font-semibold hover:translate-x-3">
                    Blog
                    <MdKeyboardArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
                <li>
                  <Link className="group flex justify-between text-[16px] items-center px-4 py-2 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition duration-300 text-sm font-semibold hover:translate-x-3">
                    Blog Details
                    <MdKeyboardArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Project */}
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter("project")}
            onMouseLeave={() => handleMouseLeave("project")}
          >
            {/* Added dynamic color class so parent link stays red when dropdown is active */}
            <span className={`flex items-center py-2 px-3 rounded-md hover:text-[#FF014F] transition duration-200 font-bold cursor-pointer ${dropdowns.project ? "text-[#FF014F]" : ""}`}>
              Project
              <MdOutlineKeyboardArrowDown
                className={`transition duration-300 ml-1 ${dropdowns.project ? "rotate-180" : ""
                  }`}
              />
            </span>

            {/* Added p-2, gap-1, and wider w-48 to make it look like the screenshot */}
            {dropdowns.project && (
              <ul className="absolute top-full left-0 w-48 bg-[#141414] rounded-xl shadow-lg    p-2 flex flex-col gap-1 z-50">
                <li>
                  {/* Added group class for the hover arrow effect */}
                  <Link className="group flex text-[16px] justify-between items-center px-4 py-2 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition duration-300 text-sm font-semibold hover:translate-x-3">
                    Project
                    {/* Arrow is hidden by default (opacity-0) and shows on hover (group-hover:opacity-100) */}
                    <MdKeyboardArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
                <li>
                  <Link className="group flex justify-between text-[16px] items-center px-4 py-2 rounded-md hover:bg-[#270D15] hover:text-[#FF014F] transition duration-300 text-sm font-semibold hover:translate-x-3">
                    Project Details
                    <MdKeyboardArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link className="py-2 px-3 rounded-md hover:text-[#FF014F] transition duration-200 font-bold">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side (Social + Menu) */}
        <div className="flex items-center ml-4 sm:ml-8 md:ml-20 lg:ml-[240px] gap-1 sm:gap-2">

          {/* Social Icons */}
          <div className="hidden sm:flex gap-1 sm:gap-2 items-center">
            <Link className="bg-[#333] p-1.5 sm:p-[10px] rounded-full hover:bg-[#FF014F] transition duration-300">
              <FaInstagram className="text-xs sm:text-[15px] text-white" />
            </Link>
            <Link className="bg-[#333] p-1.5 sm:p-[10px] rounded-full hover:bg-[#FF014F] transition duration-300">
              <FaLinkedinIn className="text-xs sm:text-[15px] text-white" />
            </Link>
            <Link className="bg-[#333] p-1.5 sm:p-[10px] rounded-full hover:bg-[#FF014F] transition duration-300">
              <FaTwitter className="text-xs sm:text-[15px] text-white" />
            </Link>
            <Link className="bg-[#333] p-1.5 sm:p-[10px] rounded-full hover:bg-[#FF014F] transition duration-300">
              <FaFacebookF className="text-xs sm:text-[15px] text-white" />
            </Link>
          </div>

          {/* Menu Icon */}
          <Link className="p-1.5 sm:p-[10px] rounded-full ml-1 sm:ml-[18px] bg-[#FF014F] transition duration-300 hover:bg-transparent hover:ring-2 hover:ring-[#FF014F]">
            <CiMenuFries className="text-white text-sm sm:text-xl stroke-2 hover:text-[#FF014F]" />
          </Link>

        </div>
      </nav>
    </div>
  );
}