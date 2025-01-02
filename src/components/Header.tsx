// src/components/Header.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light" : "dark";
  };

  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white dark:bg-gray-800">
      <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-300">
        <Link to="/">MyPortfolio</Link>
      </h1>
      <nav className="flex gap-4">
        <Link to="/" className="hover:text-blue-500 dark:hover:text-blue-300">
          Home
        </Link>
        <a
          href="/#projects"
          className="hover:text-blue-500 dark:hover:text-blue-300"
        >
          Projects
        </a>
        <Link
          to="/#about"
          className="hover:text-blue-500 dark:hover:text-blue-300"
        >
          About
        </Link>
        <Link
          to="/#contact"
          className="hover:text-blue-500 dark:hover:text-blue-300"
        >
          Contact
        </Link>
      </nav>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        title="Toggle Theme"
      >
        {isDarkMode ? "🌞" : "🌙"}
      </button>
    </header>
  );
};

export default Header;
