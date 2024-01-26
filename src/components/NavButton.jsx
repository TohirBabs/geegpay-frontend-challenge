import React from "react";
import { useState } from "react";

export const NavButton = ({
  navItem,
  darkMode,
  isCollapsed,
  hoverNav,
  setHoverNav,
  id,
  activePage,
  setActivePage,
}) => {
  const [active, setActive] = useState(false);
  return (
    <button
      onMouseOver={() => setHoverNav(id)}
      onMouseOut={() => setHoverNav(-1)}
      onClick={() => id < 6 && setActivePage(navItem.title)}
      className="group text-sm flex items-center gap-4 relative  rounded-md transition h-10 duration-300  w-full text-left capitalize"
    >
      <div className="flex justify-center w-[72px]">{navItem.icon}</div>
      {isCollapsed ? (
        <span className="group-hover:visible invisible absolute z-10 left-[110%] text-[#fff] top-[0] after:absolute after:top-[50%] after:right-[100%] after:-mt-[5px] after:border-r-[#26282c] after:border-transparent after:border-[5px] w-32 rounded-md text-center bg-[#26282c] bg-opacity-80 p-2">
          {navItem.title}
        </span>
      ) : (
        <p
          style={{
            color:
              hoverNav === id || activePage === navItem.title
                ? darkMode
                  ? "#fff"
                  : "#0d062d"
                : "#B2ABAB",
          }}
          className="absolute left-[72px] text-md font-medium  "
        >
          {navItem.title}
        </p>
      )}
    </button>
  );
};
