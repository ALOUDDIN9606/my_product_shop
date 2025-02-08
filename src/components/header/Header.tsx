import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useGetMeQuery } from "../../redux/api/auth";

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const {data} = useGetMeQuery({})
  console.log(data);
  
  

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  return (
    <header className="w-full border-b sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full bg-black text-white text-center py-2 text-sm">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <span className="font-semibold cursor-pointer">ShopNow</span>
      </div>

      <nav className="flex items-center justify-between container py-4">
        <h1
          onClick={() => navigate("/")}
          className="text-3xl font-bold cursor-pointer"
        >
          Exclusive
        </h1>

        <ul className="flex gap-8 text-xl text-gray-700">
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

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search..."
              className="w-full py-2 pr-10 pl-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "hover:text-black"
            }
          >
            <FaRegHeart className="text-2xl" />
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "hover:text-black"
            }
          >
            <IoCartOutline className="text-3xl" />
          </NavLink>

          <NavLink
            to="/auth/account"
            className={({ isActive }) =>
              isActive ? "text-red-500 font-semibold" : "hover:text-black"
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
