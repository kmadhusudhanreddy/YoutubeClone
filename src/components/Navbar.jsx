import Avatar from "react-avatar";

import { CiSearch } from "react-icons/ci";

import logo from "../images/logo.png";
import profile from "../images/profile.jpg";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import { AiOutlineMenu, AiFillSun, AiFillMoon } from "react-icons/ai";

const Navbar = () => {
  let [searchQuery, setSearchQuery] = useState("");
  let [isDarkMode, setIsDarkMode] = useState(false); // Theme state
  const navigate = useNavigate();

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Persist theme in local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const searchQueryHandler = (event) => {
    if (
      (event.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const homeHandler = () => {
    navigate("/");
  };

  return (
    <div className="w-[100%] flex justify-between items-center px-4 py-2 shadow-md bg-white dark:bg-gray-800 fixed top-0">
      {/* logo */}
      <div className="flex items-center space-x-4">
        {/* <AiOutlineMenu className="text-xl cursor-pointer hover:text-gray-700 dark:hover:text-gray-300 transition duration-200" /> */}

        <img
          src={logo}
          alt="logo"
          className="w-16 cursor-pointer hover:scale-105 transition-transform duration-200"
          onClick={homeHandler}
        />
      </div>

      {/* search bar */}
      <div className="flex w-[35%]">
        <div className="w-full px-4 py-2 rounded-l-full border dark:bg-gray-700 focus-within:ring-2 ring-blue-500">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-full dark:bg-gray-700 dark:text-white"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-3 py-2 border border-l-0 rounded-r-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition duration-150"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
      </div>

      {/* profile and theme toggle */}
      <div className="flex space-x-5 items-center">
        {/* Light/Dark theme toggle */}
        <button
          // onClick={toggleTheme}
          className="text-xl p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
        >
          {isDarkMode ? (
            <AiFillSun className="text-yellow-400" />
          ) : (
            <AiFillMoon className="text-gray-800 dark:text-gray-300" />
          )}
        </button>

        {/* Profile Avatar */}
        <Avatar
          src={profile}
          size="30"
          round={true}
          className="cursor-pointer hover:scale-105 transition-transform duration-200"
        />
      </div>
    </div>
  );
};

export default Navbar;
