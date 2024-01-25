import React from 'react'

export const NavButton = ({ navItem}) => {
    
    return (
      <button className="group text-sm flex items-center gap-4 relative rounded-md transition h-10 duration-300  w-full text-left capitalize">
        <div className="w-8 h-8 rounded flex items-center justify-center">
          {navItem.icon}
        </div>
          <span className="group-hover:visible invisible absolute z-10 left-[110%] top-[0] after:absolute after:top-[50%] after:right-[100%] after:-mt-[5px] after:border-r-[#26282c] after:border-transparent after:border-[5px] w-20 rounded-md text-center bg-[#26282c] bg-opacity-80 p-2">
            {navItem.title}
          </span>
    
      </button>
    );
  };
