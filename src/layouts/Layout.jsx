import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { useState } from 'react'

const Layout = ({ children, darkMode, setDarkMode }) => {
  const [navOpen, setNavOpen] = useState(false)
  return (
      <div className='flex relative'>
      <Sidebar navOpen={navOpen} darkMode={ darkMode} setDarkMode={setDarkMode} />
          <div className='flex flex-col flex-1 border-l'>   
        <Header navOpen={navOpen} setNavOpen={setNavOpen} />
          {children}
          </div>
    </div>
  )
}

export default Layout