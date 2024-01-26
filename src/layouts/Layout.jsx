import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";

const Layout = ({
  children,
  darkMode,
  setDarkMode,
  activePage,
  setActivePage,
}) => {
  const [navOpen, setNavOpen] = useState(true);
  return (
    <div className="max-w-[100vw] ">
      <div
        // style={{ left: navOpen ? "0" : "-63px" }}
        className={`flex relative transition ${darkMode ? "dark" : ""} `}
      >
        <Sidebar
          navOpen={navOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          activePage={activePage}
          setActivePage={setActivePage}
        />
        <div className="flex flex-col min-h-[100vh] flex-1 border-l bg-[#f5f5f5] transition pl-[74px] dark:bg-[#0e0f0f] dark:border-[#34caa5]/10">
          <Header
            navOpen={navOpen}
            setNavOpen={setNavOpen}
            darkMode={darkMode}
            activePage={activePage}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
