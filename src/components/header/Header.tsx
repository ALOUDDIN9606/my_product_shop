import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegHeart, FaBars, FaTimes } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useGetMeQuery } from "../../redux/api/auth";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { data } = useGetMeQuery({});

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="w-full border-b sticky top-0 z-50 bg-white shadow-md">
      {/* Top Sale Banner */}
      <div className="w-full bg-black text-white text-center py-2 text-sm">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-semibold cursor-pointer">Shop Now</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between container mx-auto px-4 py-4">
        {/* Logo */}
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-bold cursor-pointer"
        >
          Exclusive
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 text-lg text-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : "hover:text-black"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : "hover:text-black"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : "hover:text-black"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                isActive ? "text-black font-semibold" : "hover:text-black"
              }
            >
              SignIn
            </NavLink>
          </li>
        </ul>

        {/* Icons & Search */}
        <div className="flex items-center gap-4">
          {/* Search Input (hidden on small screens) */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search..."
              className="w-40 py-2 pr-10 pl-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="16.7" y1="16.7" x2="21" y2="21"></line>
            </svg>
          </div>

          {/* Wishlist Icon */}
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "hover:text-red-500"
            }
          >
            <FaRegHeart className="text-2xl" />
          </NavLink>

          {/* Cart Icon */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "hover:text-red-500 cursor-pointer"
            }
          >
            <IoCartOutline className="text-3xl cursor-pointer" />
          </NavLink>

          {/* User Account */}
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "hover:text-red-500"
            }
          >
            {data ? (
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-400 text-white font-semibold">
                {data?.firstName.slice(0, 1)}
              </div>
            ) : (
              <FaRegUser className="text-2xl" />
            )}
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
          menuOpen ? "block" : "hidden"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className="absolute top-0 left-0 w-3/4 h-full bg-white shadow-lg flex flex-col py-6 px-4 space-y-6"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="text-2xl self-end mb-6"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>

          <NavLink
            to="/"
            className="text-lg font-semibold hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/contact"
            className="text-lg font-semibold hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className="text-lg font-semibold hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/signin"
            className="text-lg font-semibold hover:text-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            SignIn
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
