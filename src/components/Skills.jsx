import React from 'react'
import HtmlLogo from '../assets/html-logo.png'
import CSSLogo from '../assets/css-logo.png'
import JavascriptLogo from '../assets/javascript-logo.png'
import ReactLogo from '../assets/react-logo.png'
import TailwindLogo from '../assets/tailwind-logo.png'
import FigmaLogo from '../assets/figma-logo.png'
import IllustratorLogo from '../assets/illustrator-logo.png'
import GitLogo from '../assets/git-logo.png'
import GimpLogo from '../assets/gimp-logo.png'

const Skills = () => {
  /*
  const Development = [
    {id: "1", name: "HTML", percent: "75%", bar: "w-[18rem]"},
    {id: "2", name: "CSS", percent: "80%", bar: "w-[19.2rem]"},
    {id: "3", name: "React", percent: "70%", bar: "w-[16.8rem]"},
    {id: "4", name: "Javascript", percent: "80%", bar: "w-[19.2rem]"},
    {id: "5", name: "C++", percent: "90%", bar: "w-[21.6rem]"},
  ];
*/
  return (
    <div className="bg-background text-white h-screen w-full flex justify-center items-center">
        {/* Container */}
        <div className="max-w-[90%] h-[90%] text-center">
            <h2 className="mb-8 font-bold font-orbitron drop-shadow-neonBlue">Skills</h2>
            {/* Grid container */}
            <div class="grid grid-cols-2 gap-20 ">
                {/* Development */}

                <section className="w-[100%] flex flex-col">

                  <div className="flex items-center mt-4">
                    <img className="w-14 mr-2" src={HtmlLogo} alt="Html 5"/>
                    <div className="flex w-[90%] h-[100%] items-center">
                      <div className="w-96 h-1 bg-gray-600"></div>
                      <div className="w-[19.2rem] h-1 bg-primary absolute drop-shadow-neonPink"></div>
                      <div className="h-1 w-[19.2rem] rounded-full bg-gray-200 absolute"></div>
                    </div>
                    <p className="ml-4 rounded-full">80%</p>
                  </div>

                  <div className="flex items-center mt-4">
                    <img className="w-14 mr-2" src={CSSLogo} alt="CSS"/>
                    <div className="flex w-[90%] h-[100%] items-center">
                      <div className="w-96 h-1 bg-gray-600"></div>
                      <div className="w-[20.4rem] h-1 bg-primary absolute drop-shadow-neonPink"></div>
                      <div className="h-1 w-[20.4rem] rounded-full bg-gray-200 absolute"></div>
                    </div>
                    <p className="ml-4 rounded-full">85%</p>
                  </div>

                  <div className="flex items-center mt-4">
                    <img className="w-14 mr-2" src={JavascriptLogo} alt="Javascript"/>
                    <div className="flex w-[90%] h-[100%] items-center">
                      <div className="w-96 h-1 bg-gray-600"></div>
                      <div className="w-[16.8rem] h-1 bg-primary absolute drop-shadow-neonPink"></div>
                      <div className="h-1 w-[16.8rem] rounded-full bg-gray-200 absolute"></div>
                    </div>
                    <p className="ml-4 rounded-full">70%</p>
                  </div>

                  <div className="flex items-center mt-4">
                    <img className="w-14 mr-2" src={ReactLogo} alt="React framework for Javascript"/>
                    <div className="flex w-[90%] h-[100%] items-center">
                      <div className="w-96 h-1 bg-gray-600"></div>
                      <div className="w-[16.8rem] h-1 bg-primary absolute drop-shadow-neonPink"></div>
                      <div className="h-1 w-[16.8rem] rounded-full bg-gray-200 absolute"></div>
                    </div>
                    <p className="ml-4 rounded-full">70%</p>
                  </div>

                  <div className="flex items-center mt-4">
                    <img className="w-14 mr-2" src={TailwindLogo} alt="Tailwind framework for CSS"/>
                    <div className="flex w-[90%] h-[100%] items-center">
                      <div className="w-96 h-1 bg-gray-600"></div>
                      <div className="w-[20.4rem] h-1 bg-primary absolute drop-shadow-neonPink"></div>
                      <div className="h-1 w-[20.4rem] rounded-full bg-gray-200 absolute"></div>
                    </div>
                    <p className="ml-4 rounded-full">85%</p>
                  </div>

                </section>

                {/* Design/Git */}
                <section className="w-[100%] flex flex-col justify-center">

                <div className="flex items-center mt-4">
                    <img className="w-14 mr-2" src={GitLogo} alt="Git"/>
                    <div className="flex w-[90%] h-[100%] items-center">
                      <div className="w-96 h-1 bg-gray-600"></div>
                      <div className="w-[18rem] h-1 bg-secondary absolute drop-shadow-neonBlue"></div>
                      <div className="h-1 w-[18rem] rounded-full bg-gray-200 absolute"></div>
                    </div>
                    <p className="ml-4 rounded-full">75%</p>
                  </div>

                  <div className="flex items-center mt-4">
                    <img className="w-14 mr-2" src={FigmaLogo} alt="Figma"/>
                    <div className="flex w-[90%] h-[100%] items-center">
                      <div className="w-96 h-1 bg-gray-600"></div>
                      <div className="w-[14.4rem] h-1 bg-secondary absolute drop-shadow-neonBlue"></div>
                      <div className="h-1 w-[14.4rem] rounded-full bg-gray-200 absolute"></div>
                    </div>
                    <p className="ml-4 rounded-full">60%</p>
                  </div>

                  <div className="flex items-center mt-4">
                    <img className="w-14 mr-2" src={IllustratorLogo} alt="Adobe Illustrator"/>
                    <div className="flex w-[90%] h-[100%] items-center">
                      <div className="w-96 h-1 bg-gray-600"></div>
                      <div className="w-[16.8rem] h-1 bg-secondary absolute drop-shadow-neonBlue"></div>
                      <div className="h-1 w-[16.8rem] rounded-full bg-gray-200 absolute"></div>
                    </div>
                    <p className="ml-4 rounded-full">70%</p>
                  </div>

                  <div className="flex items-center mt-4">
                    <img className="w-14 mr-2" src={GimpLogo} alt="Gimp"/>
                    <div className="flex w-[90%] h-[100%] items-center">
                      <div className="w-96 h-1 bg-gray-600"></div>
                      <div className="w-[19.2rem] h-1 bg-secondary absolute drop-shadow-neonBlue"></div>
                      <div className="h-1 w-[19.2rem] rounded-full bg-gray-200 absolute"></div>
                    </div>
                    <p className="ml-4 rounded-full">80%</p>
                  </div>

                </section>
            </div>
        </div>
    </div>
  )
}

export default Skills