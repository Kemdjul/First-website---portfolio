import React from 'react'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const {ref: aboutRef, inView: aboutVisible} = useInView();

  return (
    <div className="bg-background text-white h-screen w-full justify-center items-center flex flex-col">
        {/* Container */}
        <div className="max-w-[1200px] h-[250px] grid grid-cols-2 gap-20" ref={aboutRef}>
            {/* About me */}
            <div className="max-w-[500px] h-[200px] text-right">
                <h2 className="text-[2.441rem] drop-shadow-neonPink font-orbitron">O meni</h2>
                <p className="mt-4 font-lato opacity-90">Student prve godine stručnog studija računarstva.</p>
                <p className="mt-2 font-lato opacity-90">Mlad i ambiciozan, pun strasti za stvaranjem jedinstvenih web aplikacija i tako pridonijeti svijetu.</p>
                <p className="mt-2 font-lato opacity-90">Užitak mi je ući u nove avanture i savladavanje novih izazova.</p>
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