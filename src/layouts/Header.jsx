import { BellOutlineIcon } from "../assets/icons/BellOutline";
import { CalendarIcon } from "../assets/icons/Calendar";
import { Search } from "../assets/icons/Search";
import userDp from "../assets/images/userdp.png";

const Header = ({ navOpen, setNavOpen }) => {
  return (
    <div className="border-b bg-[#fafafa] z-30 p-2 lg:px-4   text-[#26282c] sticky top-0">
      <div className="lg:grid grid-cols-12 gap-8 flex justify-between items-center">
        <div className="lg:col-span-7 flex justify-between items-center">
          <img
            onClick={() => setNavOpen(!navOpen)}
            src="/logo.svg"
            className="w-8 lg:hidden mx-2"
            alt="site logo"
          />
          <h2 className="text-[#26282c] text-xl font-bold">Dashboard</h2>
          <div className="relative hidden lg:flex items-center ">
            <button className="w-8 h-8 absolute flex justify-center items-center rounded-full  m-1">
              <Search />
            </button>
            <input
              type="search"
              className=" rounded-full border border-[#dadddd] bg-[#fff] h-10 w-80 text-xs pl-10 text-black"
              placeholder="search for anything..."
              name=""
              id=""
            ></input>
          </div>
        </div>
        <div className="lg:col-span-5 justify-end flex gap-4">
          <div className="hidden lg:flex gap-4 items-center">
            <div className="capitalize flex items-center gap-2 text-xs">
              <CalendarIcon />
              <p>november, 15 2023</p>
            </div>
            <div className="p-3 border rounded-full">
              <BellOutlineIcon />
            </div>
          </div>
          <div className="p-1 rounded-full border text-xs items-center flex">
            <img src={userDp} className="h-8 w-8" />
            <div className="px-2 text-right hidden lg:block">
              <p>justin bergerson</p>
              <p>justin@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
