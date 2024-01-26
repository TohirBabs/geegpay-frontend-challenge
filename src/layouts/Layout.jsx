import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { useState } from 'react'

const Layout = ({ children, darkMode, setDarkMode }) => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <div className='max-w-[100vw] overflow-hidden'>
      <div
      style={{ left: navOpen ? "0" : "-63px" }}
      className={`flex relative transition ${darkMode ? "dark" : ""} `}>
      <Sidebar navOpen={navOpen} darkMode={ darkMode} setDarkMode={setDarkMode} />
          <div className='flex flex-col flex-1 border-l bg-[#f5f5f5] transition dark:bg-[#0e0f0f] dark:border-[#34caa5]/10'>   
        <Header navOpen={navOpen} setNavOpen={setNavOpen} darkMode={darkMode} />
          {children}
          </div>
    </div></div>
  )
}

export default Layout