import { useState } from "react";
import { BellOutlineIcon } from "../assets/icons/BellOutline";
import { CalendarIcon } from "../assets/icons/Calendar";
import { SearchIcon } from "../assets/icons/Search";
import { GoogleLogin } from "@react-oauth/google";

const Header = ({ navClosed, setNavClosed, darkMode, activePage }) => {
  const [time, setTime] = useState(new Date());
  const [userData, setUserData] = useState(null);

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

  const date = time.toLocaleDateString("en-us", {
    day: "2-digit",
    year: "numeric",
    month: "long",
  });
  return (
    <div className="border-b dark:border-[#34caa5]/10 bg-[#fafafa]/50 dark:bg-[#0e0f0f]/80 backdrop-blur-sm transition z-40 p-2 lg:px-6 dark:text-[#fff]  text-[#26282c] sticky top-0">
      <div className="lg:grid grid-cols-12 gap-8 flex justify-between items-center">
        <div className="lg:col-span-7 flex justify-between items-center">
          <img
            onClick={() => setNavClosed(!navClosed)}
            src="/logo.svg"
            className="w-8 lg:hidden mx-2"
            alt="site logo"
          />
          <h2 className="text-[#26282c] dark:text-[#fff] text-xl font-bold capitalize">
            {activePage === "overview" ? "dashboard" : activePage}
          </h2>
          <div className="relative hidden lg:flex items-center ">
            <button className="w-8 h-8 absolute flex justify-center items-center rounded-full  m-1">
              <SearchIcon color={darkMode ? "#fff" : "#78828A"} />
            </button>
            <input
              type="search"
              className=" rounded-full border border-[#dadddd] dark:border-gray-600/40 dark:bg-[#0e0f0f]/40 bg-[#fff]  h-10 w-80 text-xs pl-10 text-black dark:text-[#fff]"
              placeholder="search for anything..."
              name=""
              id=""
            ></input>
          </div>
        </div>
        <div className="lg:col-span-5 justify-end flex gap-4">
          <div className="hidden lg:flex gap-4 items-center">
            <div className="capitalize flex items-center gap-2 text-xs">
              <CalendarIcon color={darkMode ? "#fff" : "#0D062D"} />
              <p>{date}</p>
            </div>
            <div className="p-2 border dark:border-[#fff]/30 rounded-full">
              <BellOutlineIcon color={darkMode ? "#fff" : "#0D062D"} />
            </div>
          </div>
          {userData ? (
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
              clientId="1072547655032-d5ba4adeovn3oq7u02o6epomjnjfiafv.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
