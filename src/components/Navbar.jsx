import React from 'react'
import Facebook from '../assets/logo-facebook.jpg'
import Instagram from '../assets/logo-instagram.jpg'
import Github from '../assets/logo-github.jpg'

const Navbar = () => {
  return (
        <nav className="fixed w-full h-20 bg-transparent text-white flex items-center z-10">
          {/* Container */}
          <div class="flex w-full h-14 justify-between items-center px-6">
            {/* Logo */}
            <div>
              <img />
            </div>
            {/* Navigation */}
            <div>
              <ul className="flex items-center align-middle">
                <div className="relative group mx-4">
                  <div className="absolute inset-0 opacity-50 group-hover:opacity-100 bg-gradient-to-r from-primary via-purple-800 to-primary transition duration-500 rounded-lg blur-sm group-hover:blur-md"></div>
                    <li className="relative px-4 rounded-lg h-8 text-center justify-center bg-background group-hover:bg-black opacity-80 hover:opacity-100 transition duration-500"> 
                      <a className="" href="#home">Naslovnica</a> 
                    </li>
                </div>

                <div className="relative group mx-4">
                  <div className="absolute inset-0 opacity-50 group-hover:opacity-100 bg-gradient-to-r from-primary via-purple-800 to-secondary transition duration-500 rounded-lg blur-sm group-hover:blur-md"></div>
                    <li className="relative px-4 rounded-lg h-8 text-center justify-center bg-background group-hover:bg-black opacity-80 hover:opacity-100 transition duration-500"> 
                      <a className="" href="#about">O meni</a> 
                    </li>
                </div>

                <div className="relative group mx-4">
                  <div className="absolute inset-0 opacity-50 group-hover:opacity-100 bg-secondary transition duration-500 rounded-lg blur-sm group-hover:blur-md"></div>
                    <li className="relative px-4 rounded-lg h-8 text-center justify-center bg-background group-hover:bg-black opacity-80 hover:opacity-100 transition duration-500"> 
                      <a className="" href="#skills">Vještine</a> 
                    </li>
                </div>

                <div className="relative group mx-4">
                  <div className="absolute inset-0 opacity-50 group-hover:opacity-100 bg-gradient-to-r from-secondary via-purple-800 to-primary transition duration-500 rounded-lg blur-sm group-hover:blur-md"></div>
                    <li className="relative rounded-lg h-8 px-4 text-center justify-center bg-background group-hover:bg-black opacity-80 hover:opacity-100 transition duration-500"> 
                      <a className="" href="#work">Projekti</a> 
                    </li>
                </div>

                <div className="relative group mx-4">
                  <div className="absolute inset-0 opacity-50 group-hover:opacity-100 bg-gradient-to-r from-primary via-purple-800 to-secondary transition duration-500 rounded-lg blur-sm group-hover:blur-md"></div>
                    <li className="relative rounded-lg h-8 px-4 text-center justify-center bg-background group-hover:bg-black opacity-80 hover:opacity-100 transition duration-500"> 
                      <a className="" href="#contact">Kontakt</a> 
                    </li>
                </div>
              </ul>
            </div>
            {/* Social icons */}
                <a className="absolute top-[600%] -left-28 flex flex-row items-center hover:translate-x-28 transition duration-200" href="https://www.facebook.com/kemal.asanov.9/"> 
                  <li className="flex w-28 h-12 bg-gray-600 items-center px-4"> Facebook </li> 
                  <img className="h-12 w-12 p-0" src={Facebook} /> 
                </a>
                <a className="absolute top-[660%] -left-28 flex flex-row items-center hover:translate-x-28 transition duration-200" href="https://www.instagram.com/kemalasanov/"> 
                  <li className="flex w-28 h-12 bg-gray-600 items-center px-4"> Instagram </li> 
                  <img className="h-12 w-12 p-0" src={Instagram} /> 
                </a>
                <a className="absolute top-[720%] -left-28 flex flex-row items-center hover:translate-x-28 transition duration-200" href="https://github.com/Kemdjul"> 
                  <li className="flex w-28 h-12 bg-gray-600 items-center px-4"> Github </li> 
                  <img className="h-12 w-12 p-0" src={Github} /> 
                </a>
          </div>
        </nav>        
  )
}

export default Navbar