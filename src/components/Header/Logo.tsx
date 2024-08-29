import React from "react";

const Logo = () => {
  return (
    <div className="px-3 flex flex-row items-center gap-3">
      <img src="logo512.png" alt="logo" className="h-7 w-7" />
      <div className="text-center text-xl font-semibold">Logo</div>
    </div>
  );
};

export default Logo;
