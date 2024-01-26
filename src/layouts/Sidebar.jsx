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

const Sidebar = ({ navOpen, darkMode, setDarkMode }) => {
  const navItems = [
    { title: "category", icon: <Category /> },
    { title: "trends", icon: <TrendUp /> },
    { title: "users", icon: <Profile2User /> },
    { title: "box", icon: <Box /> },
    { title: "discount", icon: <DiscountShape /> },
    { title: "info", icon: <InfoCircle /> },
    { title: "users", icon: <Profile2User /> },
    { title: "arrow right", icon: <ArrowRight /> },
    { title: "settings", icon: <Setting /> },
    { title: "logout", icon: <Logout /> },
  ];
  return (
    <div
      style={{ left: navOpen ? "0" : "-100%" }}
      className="flex z-10 flex-col items-center h-screen lg:p-3 p-2 gap-6 bg-[#f7f8fa] pb-8 lg:pb-8 lg:sticky absolute lg:left-0 transition-all  top-0  border lg:border-none"
    >
      <img src="/logo.svg" className="w-10" alt="site logo" />
      <div className="flex flex-col  flex-1 items-center justify-between">
        <ul className="flex flex-col items-center gap-1 ">
          {navItems.map(
            (nav, index) =>
              index < 7 && (
                <li key={index}>
                  <NavButton navItem={nav} />
                </li>
              )
          )}
          <div className="p-3 gap-6 flex flex-col items-center relative rounded-full bg-[#fff]">
            <div
              style={{
                top: `${darkMode ? "3.3" : "0.5"}rem`,
              }}
              className="w-8 h-8 bg-[#34caa5] rounded-full absolute transition-all"
            ></div>
            <button onClick={() => setDarkMode(false)} className="z-10">
              <Brightness color={darkMode ? "#B2ABAB" : "#fff"} />
            </button>
            <button onClick={() => setDarkMode(true)} className="z-10">
              <Moon color={darkMode ? "#fff" : "#b2abab"} />
            </button>
          </div>
        </ul>
        <ul className="flex flex-col gap-1 ">
          {navItems.map(
            (nav, index) =>
              index >= 7 && (
                <li key={index}>
                  <NavButton navItem={nav} />
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
