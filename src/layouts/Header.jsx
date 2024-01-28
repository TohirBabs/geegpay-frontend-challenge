import { useState } from "react";
import { BellOutlineIcon } from "../assets/icons/BellOutline";
import { CalendarIcon } from "../assets/icons/Calendar";
import { SearchIcon } from "../assets/icons/Search";
import userdp from "../assets/images/panda.png";
import github from "../assets/icons/github.png";
import twitter from "../assets/icons/twitter.png";
import linkedin from "../assets/icons/linkedin.png";
import corey from "../assets/images/corey.png";
import cooper from "../assets/images/cooper.png";
import phillip from "../assets/images/phillip.png";

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
  const [notificationsOpen, setNotificationsOpen] = useState(false);

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
    <div className="border-b dark:border-gray-600/30  bg-[#fafafa]/50 dark:bg-[#0e0f0f]/80 backdrop-blur-sm transition h-[68px] z-40 p-2 lg:px-6 dark:text-[#fff] items-center flex  text-[#26282c] sticky top-0">
      <div className=" w-full gap-2 flex justify-between items-center">
        <div className="lg:w-[55vw] flex justify-between items-center">
          {mobile && (
            <img
              onClick={() => setNavClosed(!navClosed)}
              src="/logo.svg"
              className="w-8 xl:hidden mx-2"
              alt="site logo"
            />
          )}

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
            <div className="relative flex flex-col items-end">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 border bg-[#fff] dark:bg-[#000] relative dark:border-[#fff]/30 rounded-full"
              >
                <div className="absolute  bg-[#ed544e] rounded-full text-xs text-[#fff] -right-2 -top-2 h-5 w-5 items-center flex justify-center ">
                  3
                </div>
                <BellOutlineIcon color={darkMode ? "#fff" : "#0D062D"} />
              </button>
              <div
                style={{
                  height: notificationsOpen ? "10.8rem" : "0",
                  width: notificationsOpen ? "max-content" : "0",
                }}
                className="transition-all absolute top-11 text-xs border flex flex-col dark:bg-[#000] bg-gray-100 dark:border-gray-600/80  rounded-2xl overflow-hidden   "
              >
                <button className="flex items-center border-b gap-2 text-left pr-12 p-2 hover:bg-[#000]/10">
                  <img src={corey} className="h-8 w-8 rounded-full" />
                  <div className="flex flex-col gap-1 text-[#111111]/50">
                    <p>
                      <span className="font-semibold capitalize text-[#000] text-sm">
                        corey schleifer{" "}
                      </span>
                      confirmed payment
                    </p>
                    <p>3 hours ago . corey consults</p>
                  </div>
                </button>
                <button className="flex items-center border-b gap-2 text-left pr-12 p-2 hover:bg-[#000]/10">
                  <img src={cooper} className="h-8 w-8 rounded-full" />
                  <div className="flex flex-col gap-1 text-[#111111]/50">
                    <p>
                      <span className="font-semibold capitalize text-[#000] text-sm">
                        cooper press{" "}
                      </span>
                      made a request for price
                    </p>
                    <p>2 days ago . press international</p>
                  </div>
                </button>
                <button className="flex items-center border-b gap-2 text-left pr-12 p-2 hover:bg-[#000]/10">
                  <img src={phillip} className="h-8 w-8 rounded-full" />
                  <div className="flex flex-col gap-1 text-[#111111]/50">
                    <p>
                      <span className="font-semibold capitalize text-[#000] text-sm">
                        phillip lubin{" "}
                      </span>
                      recieved their invoice
                    </p>
                    <p>3 days ago . lubin finance</p>
                  </div>
                </button>
              </div>
            </div>
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
              <img src={userdp} className="h-10 w-10 rounded-full" />
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
                <p className="text-[#787486] text-[0.7rem]">
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
                height: profileMenuOpen ? "10.5rem" : "0",
                width: profileMenuOpen ? "max-content" : "0",
              }}
              className="transition-all absolute top-14 shadow border flex flex-col dark:bg-[#000] bg-gray-100 dark:border-gray-600/80  rounded-2xl overflow-hidden  gap-2 "
            >
              <p className="p-3  pr-10  text-left capitalize rounded-full dark:hover:bg-[f5f5f5]/20 ">
                connect with me @
              </p>
              <div className="flex flex-col gap-2 px-2  ">
                <a
                  href="https://github.com/TohirBabs"
                  className="flex gap-2 p-1 "
                >
                  <img src={github} className="w-5" />
                  <p>github</p>
                </a>
                <a
                  href="https://twitter.com/BabsTohir"
                  className="flex gap-2 p-1"
                >
                  <img src={twitter} className="w-5" />
                  <p>twitter</p>
                </a>
                <a
                  href="https://www.linkedin.com/in/tohir-babs-6a0045167/"
                  className="flex gap-2 p-1"
                >
                  <img src={linkedin} className="w-5" />
                  <p>linkedin</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
