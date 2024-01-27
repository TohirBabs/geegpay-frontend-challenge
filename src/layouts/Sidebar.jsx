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
import { SearchIcon } from "../assets/icons/Search";
import { CalendarIcon } from "../assets/icons/Calendar";

const Sidebar = ({
  isCollapsed,
  setIsCollapsed,
  darkMode,
  setDarkMode,
  activePage,
  setActivePage,
  mobile,
  date,
}) => {
  const [hoverNav, setHoverNav] = useState(-1);
  const navItems = [
    {
      title: "dashboard",
      icon: (
        <Category
          color={
            hoverNav === 0 || activePage === "dashboard"
              ? darkMode
                ? "#fff"
                : "#0d062d"
              : "#B2ABAB"
          }
        />
      ),
    },
    {
      title: "analytics",
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
      title: "inventory",
      icon: (
        <Box
          color={
            hoverNav === 3 || activePage === "Inventory"
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
      style={{
        width: isCollapsed ? (!mobile ? "72px" : "0") : "250px",
        overflow: !mobile ? "visible" : "hidden",
      }}
      className="flex z-50 flex-col items-center h-screen gap-4 text-[#26282c]   bg-[#f2f6ff]/80 backdrop-blur dark:bg-[#000]/80 pb-8 lg:pb-8 fixed   lg:left-0 transition-all  top-0  border-r dark:border-gray-600/40 "
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
        style={{
          transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
          top: mobile ? "1.3rem" : "1px",
          right: mobile ? "1rem" : "-1rem",
        }}
        className="absolute transition duration-500 top-[1px] -right-4 w-8 h-8 border-2 border-white/50  bg-gray-600 flex justify-center items-center rounded-xl "
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
      {mobile && (
        <>
          <div className="capitalize flex items-center dark:text-[#fff] gap-1 text-xs">
            <CalendarIcon color={darkMode ? "#fff" : "#0D062D"} />
            <p>{date}</p>
          </div>
          <div className="relative flex items-center ">
            <button className="w-8 h-8 absolute flex justify-center items-center rounded-full  m-1">
              <SearchIcon color={darkMode ? "#fff" : "#78828A"} />
            </button>
            <input
              type="search"
              className=" rounded-full border border-[#dadddd] dark:border-gray-600/40 dark:bg-[#0e0f0f]/40 bg-[#fff]  h-10 w-56 text-xs pl-10 text-black dark:text-[#fff]"
              placeholder="search for anything..."
              name=""
              id=""
            ></input>
          </div>
        </>
      )}

      <div
        style={{ overflow: isCollapsed ? "visible" : "hidden" }}
        className="flex flex-col relative flex-1 w-full   justify-between"
      >
        <div
          style={{
            top:
              activePage === "dashboard"
                ? "0.5rem"
                : activePage === "analytics"
                ? "3.5rem"
                : activePage === "customers"
                ? "6.5rem"
                : activePage === "inventory"
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
          <div className="p-2 m-3 max-w-[166px] gap-4 flex flex-col  relative rounded-3xl transition dark:bg-[#1e2020] bg-[#fff] ">
            <div
              style={{
                top: darkMode ? "3.3rem" : "0.5rem",
                width: isCollapsed ? "1.9rem" : "150px",
              }}
              className=" h-[1.9rem] bg-[#34caa5]  rounded-full absolute transition-all duration-500"
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
