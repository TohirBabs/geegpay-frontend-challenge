import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Layout = ({
  children,
  darkMode,
  setDarkMode,
  activePage,
  setActivePage,
  mobile,
}) => {
  const [navClosed, setNavClosed] = useState(true);
  return (
    <GoogleOAuthProvider clientId="739106075686-o3iq57fl19qmf50planckptdekklb1du.apps.googleusercontent.com">
      <div className="max-w-[100vw] ">
        <div
          // style={{ left: navClosed ? "0" : "-63px" }}
          className={`flex relative transition ${darkMode ? "dark" : ""} `}
        >
          <Sidebar
            isCollapsed={navClosed}
            setIsCollapsed={setNavClosed}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            activePage={activePage}
            setActivePage={setActivePage}
            mobile={mobile}
          />
          <div
            style={{
              paddingLeft: mobile ? "0" : "72px",
            }}
            className="flex flex-col min-h-[100vh] flex-1 border-l bg-[#f5f5f5] transition  dark:bg-[#0a0a0a] dark:border-[#34caa5]/10"
          >
            <Header
              navClosed={navClosed}
              setNavClosed={setNavClosed}
              darkMode={darkMode}
              activePage={activePage}
            />
            {children}
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Layout;
