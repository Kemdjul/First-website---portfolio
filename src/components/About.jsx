import React from 'react'

const About = () => {
  return (
    <div className="bg-background text-white h-screen w-full justify-center items-center flex flex-col">
        {/* Container */}
        <div className="max-w-[1200px] h-[250px] grid grid-cols-2 gap-20">
            {/* About me */}
            <div className="max-w-[500px] h-[200px] text-right">
                <h2 className="text-[2.441rem] drop-shadow-neonPink font-orbitron">O meni</h2>
                <p className="mt-4 font-lato opacity-90">Student prve godine stručnog studija računarstva na FERIT-u.</p>
                <p>Rođen 2. rujna 2001. god u Osijeku.</p>
                <p>S</p>
            </div>
            {/* Why me */}
            <div className="max-w-[500px] h-[200px]">
                <h3 className="text-[1.953rem] mt-12 drop-shadow-neonPink font-orbitron">Zašto ja</h3>
                <ul className="font-lato">
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About