import React from 'react'

const Navbar = () => {
  return (
        <nav className="fixed w-full h-14 bg-gray-600 text-white">
          {/* Container */}
          <div class="flex w-full h-14 justify-between items-center px-6 ">
            {/* Logo */}
            <div>
              <img />
            </div>
            {/* Navigation */}
            <div>
              <ul className="flex">
                <li className="px-4"> <a href="#">Home</a> </li>
                <li className="px-4"> <a href="#">About</a> </li>
                <li className="px-4"> <a href="#">Skills</a> </li>
                <li className="px-4"> <a href="#">Work</a> </li>
                <li className="px-4"> <a href="#">Contact</a> </li>
              </ul>
            </div>
            {/* Social icons */}
            <div className="absolute top-[900%] left-0 z-10">
              <ul>
                <a href="#"> <li className="w-28 h-12 bg-gray-600 items-center text-center"> Facebook </li> </a>
                <a href="#"> <li className="w-28 h-12 bg-gray-600 items-center text-center"> Instagram </li> </a>
                <a href="#"> <li className="w-28 h-12 bg-gray-600 items-center text-center"> Github </li> </a>
              </ul>
            </div>
          </div>
        </nav>        
  )
}

export default Navbar