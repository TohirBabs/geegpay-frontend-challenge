import React from 'react'

const Header = ({navOpen, setNavOpen}) => {
  
  return (
      <div className='border-b bg-[#fafafa] p-2 md:px-4 bg-[#fafafa] z-20 text-[#26282c] sticky top-0'>
          <div className='md:grid grid-cols-12 gap-8 flex justify-between items-center'>  
        <div className='md:col-span-7 flex justify-between items-center'>
          <img onClick={()=> setNavOpen(!navOpen)} src='/logo.svg' className='w-8 md:hidden mx-2' alt='site logo' />         
          <h2 className='text-[#26282c] text-xl font-bold'>Dashboard</h2>
        <div className="relative hidden md:flex items-center ">
          <button
            className="w-8 h-8 absolute flex justify-center items-center rounded-full  m-1"
          >
            <img src="./src/assets/icons/search.svg"/>
          </button>
          <input
            type="search"
            className="w-full rounded-full border border-[#dadddd] bg-[#fff] h-10 w-64 text-xs pl-10 text-black"
            placeholder="search for anything..."
            name=""
            id=""
          ></input>
        </div>
          </div>
              <div className='md:col-span-5 justify-end flex gap-4'>
                   <div className='hidden md:flex gap-4 items-center'>
                      <p className='capitalize text-xs'>
                          <img src="./src/assets/icons/calendar.svg" className='inline px-2' />
                          november, 15 2023
                      </p>
                      <div className='p-3 border rounded-full'>
                          <img src="./src/assets/icons/bell-outline.svg" />
                      </div>
                  
                  </div>
                  <div className='p-1 rounded-full border text-xs items-center flex'>
                      <img src="./src/assets/images/userdp.png" className='h-8 w-8'/>
                      <div className='px-2 text-right hidden md:block'>
                          <p>justin bergerson</p>
                          <p>justin@gmail.com</p>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Header