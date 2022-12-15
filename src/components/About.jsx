import React from 'react'
import SpartanHelmet from '../assets/sparta-helmet.png'
import GraduateCap from '../assets/graduate-cap.png'
import Fire from '../assets/fire.png'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const {ref: aboutRef, inView: aboutVisible} = useInView();

  return (
    <div className="bg-background text-white h-screen w-full justify-center items-center flex flex-col">
        {/* Container */}
        <div className="max-w-[1200px] h-[250px] grid grid-cols-2 gap-20" ref={aboutRef}>
            {/* About me */}
            <div className="max-w-[500px] h-[200px]">
                <h2 className="text-[2.441rem] drop-shadow-neonPink font-orbitron text-right">O meni</h2>

                <div className="flex flex-row">
                  <div className="pt-8">
                    <img src={GraduateCap} className="w-12 inline-block" />
                    <img src={Fire} className="w-8 inline-block mr-20 mt-8" />
                    <img src={SpartanHelmet} className="w-8 inline-block mt-8" />
                  </div>
                  <div className="pt-8">
                    <p className="font-lato opacity-90 inline-block text-lg leading-8">  Student prve godine stručnog studija računarstva.</p>
                    <p className="font-lato opacity-90 inline-block text-lg leading-8 mt-8">  Mlad i ambiciozan, pun strasti za stvaranjem jedinstvenih web aplikacija i tako pridonijeti svijetu.</p>
                    <p className="font-lato opacity-90 inline-block text-lg leading-8 mt-8">Užitak mi je ući u nove avanture i savladavanje novih izazova.</p>
                  </div>
                  
                </div>
            </div>
            {/* Why me */}
            <div className="max-w-[500px] h-[200px]">
                <h3 className="text-[1.953rem] mt-12 drop-shadow-neonPink font-orbitron">Zašto ja</h3>
                <ul className="font-lato">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About