import React, { useState } from "react";

const TopNav = () => {
  const pathname = window.location.pathname;

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:flex lg:flex-row w-fit justify-center gap-4">
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
      <div className="lg:hidden flex flex-row w-fit px-4 justify-center gap-4">
        <button
          className="bg-purple-300 p-2 rounded-lg"
          onClick={() => setOpen((p) => !p)}
        >
          Open
        </button>
        {open && (
          <div className="fixed top-[50px] flex flex-col gap-2 right-4 rounded-[0.75em] bg-slate-400 h-fit w-fit p-4 shadow-[-3px_3px_3px_rgba(0,0,0,0.5)]">
            <div className="text-center text-xl px-4">
              <a
                href="/"
                className={`${
                  pathname === "/" ? "text-purple-600 " : ""
                }  font-semibold`}
              >
                Home
              </a>
            </div>
            <div className="text-center text-xl px-4">
              <a
                href="/about"
                className={`${
                  pathname === "/about" ? "text-purple-600" : ""
                } font-semibold`}
              >
                About
              </a>
            </div>
            <div className="text-center text-xl px-4">
              <a
                href="/projects"
                className={`${
                  pathname === "/projects" ? "text-purple-600" : ""
                } font-semibold`}
              >
                Projects
              </a>
            </div>
            <div className="text-center text-xl px-4">
              <a
                href="/contacts"
                className={`${
                  pathname === "/contacts" ? "text-purple-600" : ""
                } font-semibold`}
              >
                Contacts
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TopNav;
