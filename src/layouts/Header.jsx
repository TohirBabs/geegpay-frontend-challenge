import { useState } from "react";
import { BellOutlineIcon } from "../assets/icons/BellOutline";
import { CalendarIcon } from "../assets/icons/Calendar";
import { SearchIcon } from "../assets/icons/Search";
import userdp from "../assets/images/userdp.png";
import { GoogleLogin } from "@react-oauth/google";

const Header = ({
  navClosed,
  setNavClosed,
  darkMode,
  activePage,
  mobile,
  date,
}) => {
  const [userData, setUserData] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const responseGoogle = (response) => {
    // Handle the Google login response
    console.log(response);

    if (response.profileObj) {
      // If the response contains a profile object, update the user data state
      setUserData({
        name: response.profileObj.name,
        email: response.profileObj.email,
        imageUrl: response.profileObj.imageUrl,
      });
    }
  };

  return (
    <div className="border-b dark:border-[#34caa5]/10 bg-[#fafafa]/50 dark:bg-[#0e0f0f]/80 backdrop-blur-sm transition h-[68px] z-40 p-2 lg:px-6 dark:text-[#fff] items-center flex  text-[#26282c] sticky top-0">
      <div className=" w-full gap-2 flex justify-between items-center">
        <div className="lg:w-[55vw] flex justify-between items-center">
          <img
            onClick={() => setNavClosed(!navClosed)}
            src="/logo.svg"
            className="w-8 lg:hidden mx-2"
            alt="site logo"
          />
          <h2 className="text-[#26282c] dark:text-[#fff] lg:text-xl text-lg font-bold capitalize">
            {activePage}
          </h2>
          <div className="relative hidden lg:flex items-center ">
            <button className="w-8 h-8 absolute flex justify-center items-center rounded-full  m-1">
              <SearchIcon color={darkMode ? "#fff" : "#78828A"} />
            </button>
            <input
              type="search"
              className=" rounded-full border border-[#dadddd] dark:border-gray-600/80 transition dark:bg-[#0e0f0f]/40 bg-[#fff]  h-10 w-80 text-xs pl-10 text-black dark:text-[#fff]"
              placeholder="search for anything..."
              name=""
              id=""
            ></input>
          </div>
        </div>
        <div className=" justify-end relative flex gap-4">
          <div className="flex gap-4  items-center">
            <div className="capitalize hidden lg:flex items-center gap-2 text-xs">
              <CalendarIcon color={darkMode ? "#fff" : "#0D062D"} />
              <p>{date}</p>
            </div>
            <button className="p-2 border bg-[#fff] dark:bg-[#000] relative dark:border-[#fff]/30 rounded-full">
              <div className="absolute  bg-[#ed544e] rounded-full text-xs text-[#fff] -right-2 -top-2 h-5 w-5 items-center flex justify-center ">
                3
              </div>
              <BellOutlineIcon color={darkMode ? "#fff" : "#0D062D"} />
            </button>
          </div>
          {/* {userData ? (
            <div className="p-1 lg:pr-3 rounded-full border dark:border-[#dadddd] text-sm  items-center flex">
              <img src={userData.imageUrl} className="h-10 w-10" />
              <div className="px-2 text-right hidden lg:block">
                <p className="capitalize">{userData.name}</p>
                <p className="text-[#787486] text-[0.75rem]">
                  {userData.email}
                </p>
              </div>
            </div>
          ) : (
            <GoogleLogin
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          )} */}
          <div className="p-1  rounded-[1.6rem] bg-[#fff] dark:bg-[#000]   border dark:border-gray-600/80 text-sm   flex flex-col items-end">
            <button
              onClick={() => setProfileMenuOpen(!profileMenuOpen)}
              className="flex items-center"
            >
              <img src={userdp} className="h-10 w-10" />
              <div
                // style={{
                //   display: mobile && !profileMenuOpen ? "none" : "block",
                // }}
                className="px-1 text-right hidden lg:block"
              >
                <p
                  style={{
                    color: darkMode ? "#fff" : "#26282c",
                  }}
                  className="capitalize"
                >
                  tohir babatunde
                </p>
                <p className="text-[#787486] text-[0.5rem]">
                  tohirbabs@gmail.com
                </p>
              </div>
              <div className="-rotate-90 hidden lg:block">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 16L10 12L14 8"
                    stroke={darkMode ? "#fff" : "#0d062d"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <div
              style={{
                height: profileMenuOpen ? "9rem" : "0",
                width: profileMenuOpen ? "max-content" : "0",
              }}
              className="transition-all absolute top-14 border flex flex-col dark:bg-[#111111]/70 bg-gray-100/70 dark:border-gray-600/80 backdrop-blur rounded-2xl overflow-hidden  gap-3  "
            >
              <button className="p-2 px-4  text-left capitalize">
                edit your profile
              </button>
              <button className="p-2 px-4 text-left capitalize">
                add another account
              </button>
              <button className="p-2 px-4 text-left capitalize">
                logout of tohir babs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
