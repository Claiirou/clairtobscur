import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../assets/Logo.png";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link to="/">
          <div className="w-20 h-30 cursor-pointer">
            <img src={Logo} alt="logo" />
          </div>
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link to="/photos">
              <li className="flex items-center space-x-2 px-4 py-3">
                <p>Photos</p>
              </li>
            </Link>
            <Link to="/prestations">
              <li className="flex items-center space-x-2 px-4 py-3">
                <p>Prestations</p>
              </li>
            </Link>

            <Link to="/apropos">
              <li className="flex items-center space-x-2 px-4 py-3">
                <p>A propos</p>
              </li>
            </Link>

            <Link to="/contact">
              <li className="flex items-center space-x-2 px-4 py-3">
                <p>Contact</p>
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer"></div>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      <div
        className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen" : ""}
      >
        <div
          div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <div className="w-10 h-10">
              <img src={Logo} alt="logo" />
            </div>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="py-28 flex flex-col items-center">
            <ul className="uppercase">
              <Link to="/">
                <li className="flex items-center space-x-2 px-4 py-6">
                  <p>Accueil</p>
                </li>
              </Link>
              <Link to="/photos">
                <li className="flex items-center space-x-2 px-4 py-6">
                  <p>Photos</p>
                </li>
              </Link>
              <Link to="/prestations">
                <li className="flex items-center space-x-2 px-4 py-6">
                  <p>Prestations</p>
                </li>
              </Link>

              <Link to="/apropos">
                <li className="flex items-center space-x-2 px-4 py-6">
                  <p>A propos</p>
                </li>
              </Link>

              <Link to="/contact">
                <li className="flex items-center space-x-2 px-4 py-6">
                  <p>Contact</p>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
