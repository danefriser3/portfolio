import React from "react";

const TopNav = () => {
  const pathname = window.location.pathname;

  return (
    <div className="flex flex-row w-full justify-center gap-4">
      <div className="text-center text-xl px-4">
        <a
          href="/"
          className={`${pathname === "/" ? "text-purple-400" : ""}  `}
        >
          Home
        </a>
      </div>
      <div className="text-center text-xl px-4">
        <a
          href="/about"
          className={`${pathname === "/about" ? "text-purple-400" : ""} `}
        >
          About
        </a>
      </div>
      <div className="text-center text-xl px-4">
        <a
          href="/projects"
          className={`${pathname === "/projects" ? "text-purple-400" : ""} `}
        >
          Projects
        </a>
      </div>
      <div className="text-center text-xl px-4">
        <a
          href="/contacts"
          className={`${pathname === "/contacts" ? "text-purple-400" : ""} `}
        >
          Contacts
        </a>
      </div>
    </div>
  );
};

export default TopNav;
