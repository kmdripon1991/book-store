import React, { useState } from "react";
import {
  Bars3BottomRightIcon,
  BeakerIcon,
  BoltIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOPen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="flex justify-between p-5 bg-gray-100">
        <Link className="inline-flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className="font-bold ml-2 text-xl tracking-wider text-gray-800">
            bookStore
          </span>
        </Link>
        <ul className="lg:flex items-center space-x-8 hidden">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/books"}>Books</NavLink>
          <NavLink to={"/about"}>About us</NavLink>
        </ul>

        {/* mobile navbar section */}
        <div className="lg:hidden">
          <button
            aria-level="Open Menu"
            title="Open-menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <span>
              <Bars3BottomRightIcon className="w-5 text-gray-500" />
            </span>
          </button>
          {isMenuOPen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className=" m-4 p-5 bg-white border rounded ">
                <div className="flex items-center justify-between mb-4">
                  <Link className="inline-flex items-center">
                    <BoltIcon className="h-6 w-6 text-blue-500" />
                    <span className="font-bold ml-2 text-xl tracking-wider text-gray-800">
                      bookStore
                    </span>
                  </Link>
                  <div>
                    <button aria-label="Close Menu" title="Close-menu">
                      <XMarkIcon
                        onClick={() => setIsMenuOpen(false)}
                        className="w-5 text-gray-600"
                      />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/books">Books</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
