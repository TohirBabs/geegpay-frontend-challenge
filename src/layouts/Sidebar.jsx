import React from "react";
import { Category } from "../assets/icons/Category";
import TrendUp from "../assets/icons/TrendUp";
import { Profile2User } from "../assets/icons/Profile2User";
import { InfoCircle } from "../assets/icons/InfoCircle";
import { NavButton } from "../components/NavButton";
import { Box } from "../assets/icons/Box";
import { DiscountShape } from "../assets/icons/DiscountShape";
import { ArrowRight } from "../assets/icons/ArrowRight";
import { Setting } from "../assets/icons/Setting";
import { Logout } from "../assets/icons/Logout";
import { Brightness } from "../assets/icons/Brightness";
import { Moon } from "../assets/icons/Moon";
import { useState } from "react";

const Sidebar = ({
  navOpen,
  darkMode,
  setDarkMode,
  activePage,
  setActivePage,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [hoverNav, setHoverNav] = useState(-1);
  const navItems = [
    {
      title: "overview",
      icon: (
        <Category
          color={
            hoverNav === 0 || activePage === "overview"
              ? darkMode
                ? "#fff"
                : "#0d062d"
              : "#B2ABAB"
          }
        />
      ),
    },
    {
      title: "trends",
      icon: (
        <TrendUp
          color={
            hoverNav === 1 || activePage === "trends"
              ? darkMode
                ? "#fff"
                : "#0d062d"
              : "#B2ABAB"
          }
        />
      ),
    },
    {
      title: "customers",
      icon: (
        <Profile2User
          color={
            hoverNav === 2 || activePage === "customers"
              ? darkMode
                ? "#fff"
                : "#0d062d"
              : "#B2ABAB"
          }
        />
      ),
    },
    {
      title: "Products",
      icon: (
        <Box
          color={
            hoverNav === 3 || activePage === "Products"
              ? darkMode
                ? "#fff"
                : "#0d062d"
              : "#B2ABAB"
          }
        />
      ),
    },
    {
      title: "sales",
      icon: (
        <DiscountShape
          color={
            hoverNav === 4 || activePage === "sales"
              ? darkMode
                ? "#fff"
                : "#0d062d"
              : "#B2ABAB"
          }
        />
      ),
    },
    {
      title: "reports",
      icon: (
        <InfoCircle
          color={
            hoverNav === 5 || activePage === "reports"
              ? darkMode
                ? "#fff"
                : "#0d062d"
              : "#B2ABAB"
          }
        />
      ),
    },
    {
      title: "refresh data",
      icon: (
        <ArrowRight
          color={
            hoverNav === 6 || activePage === "refresh data"
              ? darkMode
                ? "#fff"
                : "#0d062d"
              : "#B2ABAB"
          }
        />
      ),
    },
    {
      title: "settings",
      icon: (
        <Setting
          color={
            hoverNav === 7 || activePage === "settings"
              ? darkMode
                ? "#fff"
                : "#0d062d"
              : "#B2ABAB"
          }
        />
      ),
    },
    {
      title: "logout",
      icon: (
        <Logout
          color={
            hoverNav === 8 || activePage === "logout"
              ? darkMode
                ? "#fff"
                : "#0d062d"
              : "#B2ABAB"
          }
        />
      ),
    },
  ];
  return (
    <div
      style={{ width: isCollapsed ? "72px" : "250px" }}
      className="flex z-50 flex-col items-center h-screen gap-4 text-[#26282c]   bg-[#f2f6ff]/80 backdrop-blur dark:bg-[#191a19]/80 pb-8 lg:pb-8 fixed   lg:left-0 transition-all  top-0  border-r "
    >
      <a className=" relative h-[68px] flex w-full  overflow-hidden items-center">
        <div className="w-[72px] flex justify-center">
          <img src="/logo.svg" className="w-10" alt="site logo" />
        </div>
        <p
          style={{
            color: darkMode ? "#fff" : "#26282c",
          }}
          className="absolute left-[72px] text-2xl font-bold font-mono"
        >
          Geegpay
        </p>
      </a>
      <button
        onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
        style={{ transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)" }}
        className="absolute transition duration-500 top-[1px] -right-4 w-7 h-7 border-2 border-white  bg-gray-600 flex justify-center items-center rounded-lg "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 16L10 12L14 8"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        style={{ overflow: isCollapsed ? "visible" : "hidden" }}
        className="flex flex-col relative flex-1 w-full   justify-between"
      >
        <div
          style={{
            top:
              activePage === "overview"
                ? "0.5rem"
                : activePage === "trends"
                ? "3.5rem"
                : activePage === "customers"
                ? "6.5rem"
                : activePage === "Products"
                ? "9.5rem"
                : activePage === "sales"
                ? "12.5rem"
                : activePage === "reports"
                ? "15.5rem"
                : activePage === "refresh data"
                ? "0.5rem"
                : activePage === "settings"
                ? "3.5rem"
                : activePage === "logout"
                ? "6.5rem"
                : "0.5rem",
          }}
          className="w-1 h-6 absolute transition-all  right-0 rounded-l bg-[#0d062d] dark:bg-[#fff]"
        ></div>

        <ul className="flex flex-col gap-2 ">
          {navItems.map(
            (nav, index) =>
              index < 6 && (
                <li key={index}>
                  <NavButton
                    id={index}
                    navItem={nav}
                    isCollapsed={isCollapsed}
                    setHoverNav={setHoverNav}
                    hoverNav={hoverNav}
                    darkMode={darkMode}
                    activePage={activePage}
                    setActivePage={setActivePage}
                  />
                </li>
              )
          )}
          <div className="p-2 m-3 max-w-[166px] gap-4 flex flex-col  relative rounded-3xl transition dark:bg-[#000] bg-[#fff] ">
            <div
              style={{
                top: darkMode ? "3.3rem" : "0.5rem",
                width: isCollapsed ? "2rem" : "150px",
              }}
              className=" h-8 bg-[#34caa5]  rounded-full absolute transition-all"
            ></div>
            <button
              onClick={() => setDarkMode(false)}
              className="z-10 group relative flex items-center"
            >
              <div className="flex justify-center items-center w-[30px] h-[30px]">
                <Brightness color={darkMode ? "#B2ABAB" : "#fff"} />
              </div>
              {isCollapsed ? (
                <span className="group-hover:visible invisible absolute z-10 text-sm left-[110%] text-[#fff] top-[0] after:absolute after:top-[50%] after:right-[100%] after:-mt-[5px] after:border-r-[#26282c] after:border-transparent after:border-[5px] w-24 rounded-md text-center bg-[#26282c] bg-opacity-80 p-2">
                  light mode
                </span>
              ) : (
                <p
                  style={{
                    color: darkMode ? "#B2ABAB" : "#fff",
                  }}
                  className="absolute transition left-[40px] text-sm font-medium  "
                >
                  light mode
                </p>
              )}
            </button>
            <button
              onClick={() => setDarkMode(true)}
              className="z-10 group relative flex items-center"
            >
              <div className="flex justify-center items-center w-[30px] h-[30px]">
                <Moon color={!darkMode ? "#B2ABAB" : "#fff"} />
              </div>
              {isCollapsed ? (
                <span className="group-hover:visible invisible absolute z-10 text-sm left-[110%] text-[#fff] top-[0] after:absolute after:top-[50%] after:right-[100%] after:-mt-[5px] after:border-r-[#26282c] after:border-transparent after:border-[5px] w-24 rounded-md text-center bg-[#26282c] bg-opacity-80 p-2">
                  dark mode
                </span>
              ) : (
                <p
                  style={{
                    color: !darkMode ? "#B2ABAB" : "#fff",
                  }}
                  className="absolute transition left-[40px] text-sm font-medium  "
                >
                  dark mode
                </p>
              )}
            </button>
          </div>
        </ul>
        <ul className="flex flex-col gap-1 ">
          {navItems.map(
            (nav, index) =>
              index >= 6 && (
                <li key={index}>
                  <NavButton
                    id={index}
                    navItem={nav}
                    isCollapsed={isCollapsed}
                    setHoverNav={setHoverNav}
                    hoverNav={hoverNav}
                    darkMode={darkMode}
                    activePage={activePage}
                    setActivePage={setActivePage}
                  />
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
