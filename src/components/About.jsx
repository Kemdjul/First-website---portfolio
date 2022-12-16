import React from 'react'
import SpartanHelmet from '../assets/sparta-helmet.png'
import GraduateCap from '../assets/graduate-cap.png'
import Fire from '../assets/fire.png'
import Mountain from '../assets/mountain.png'
import Team from '../assets/team.png'
import Snow from '../assets/snow.png'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const {ref: aboutRef, inView: aboutVisible} = useInView();

  return (
    <div className="bg-background text-white h-screen w-full justify-center items-center flex flex-col" id="about">
        {/* Container */}
          <div className="max-w-7xl h-64 grid grid-cols-2 gap-20" ref={aboutRef}>
            {/* About me */}
            <div className="max-w-lg h-52">
                <h2 className={`${aboutVisible ? 'about text-[2.441rem] whitespace-nowrap drop-shadow-neonPink font-orbitron' : ''}`}>O meni</h2>

                <div className="flex flex-row">
                  <div className="pt-10">
                    <img src={GraduateCap} className="w-12 inline-block" />
                    <img src={Fire} className="w-8 inline-block mr-20 mt-10" />
                    <img src={SpartanHelmet} className="w-8 inline-block mt-10" />
                  </div>
                  <div className="pt-10">
                    <p className={`${aboutVisible ? 'about delay-1 font-lato opacity-90 text-lg leading-8' : ''}`} >  Student prve godine stručnog studija računarstva.</p>
                    <p className={`${aboutVisible ? 'about delay-2 font-lato opacity-90 text-lg leading-8 mt-8' : '' }`}>  Mlad i ambiciozan, pun strasti za stvaranjem</p>
                    <p className={`${aboutVisible ? 'about delay-3 font-lato opacity-90 text-lg' : '' }`}>jedinstvenih web aplikacija i tako pridonijeti svijetu.</p>
                    <p className={`${aboutVisible ? 'about delay-4 font-lato opacity-90 text-lg leading-8 mt-8' : '' }`}>Užitak mi je ući u nove avanture i savladavanje novih</p>
                    <p className={`${aboutVisible ? 'about delay-5 font-lato opacity-90 text-lg' : '' }`}>izazova.</p>
                  </div>
                  
                </div>
            </div>
            {/* Why me */}
            <div className="max-w-[500px] h-[200px]">
                <h2 className={`${aboutVisible ? 'about text-[2.441rem] whitespace-nowrap drop-shadow-neonBlue font-orbitron' : ''}`}>Zašto ja</h2>

                <div className="flex flex-row">
                  <div className="pt-10">
                    <img src={Mountain} className="w-12 inline-block" />
                    <img src={Team} className="w-14 inline-block mr-20 mt-12" />
                    <img src={Snow} className="w-14 inline-block mt-9" />
                  </div>
                  <div className="pt-10">
                    <p className={`${aboutVisible ? 'about delay-1 font-lato opacity-90 text-lg leading-8' : ''}`}>Volim izazove, i dajem sve od sebe za svaki projekt.</p>
                    <p className={`${aboutVisible ? 'about delay-2 font-lato opacity-90 text-lg leading-8 mt-12' : '' }`}>Otvoren, komunikativan i, prije svega, timski nastrojen.</p>
                    <p className={`${aboutVisible ? 'about delay-3 font-lato opacity-90 text-lg leading-8 mt-10' : '' }`}>Snalažljiv u intenzivnim situacijama te, sa</p>
                    <p className={`${aboutVisible ? 'about delay-4 font-lato opacity-90 text-lg' : '' }`}>smirenom glavom, efikasno i precizno odrađujem zadatke.</p>
                  </div>
                  
                </div>
              </div>
            </div>
    </div>
  )
}

export default About