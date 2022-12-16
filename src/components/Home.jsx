import React from 'react';
import { useInView } from 'react-intersection-observer';
import Profile from '../assets/home-profile.jpg';
import './dynamic.css';

const Home = () => {
  const { ref: textRef, inView: textIsVisible } = useInView();
  

  return (
    <div className="h-screen w-full bg-background font-orbitron text-white justify-center content-center flex flex-col" id="home">
        {/* Container */}
        <div className={`${textIsVisible ? 'home' : ''}`} ref={textRef}>
          <div className="grid grid-cols-2 justify-center items-center max-w-[1200px] mx-auto gap-12">
            {/* Welcome text */}
            <div>
              <h1 className="drop-shadow-neonPink text-right font-bold">Ja sam Kem<span className="animate-flickerSlow text-[3.157rem] delay-50">a</span>l.</h1>
              <h1 className="drop-shadow-neonBlue text-right font-bold">Front<span className="animate-flickerSlow text-[3.157rem]">e</span>nd  <span className="animate-flickerFast text-[3.157rem]">d</span>evel<span className="animate-flickerFast delay-75 text-[3.157rem]">o</span>per.</h1>
            </div>
            {/* Picture */}
            <div>
              <img className="w-80 h-80 rounded-full object-cover" src={Profile} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home