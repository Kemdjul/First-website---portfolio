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
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref: skillsRef, inView: skillsVisible } = useInView();

  return (
    <div className="bg-background text-white h-screen w-full flex justify-center items-center pt-28" id="skills">
        {/* Container */}
        <div className="max-w-[90%] h-[90%] text-center">
            <h2 className="text-[2.441rem] mb-8 font-bold font-orbitron drop-shadow-neonBlue">Skills</h2>
            <div>
            {/* Grid container */}
              <div class="grid grid-cols-2 gap-20 "  ref = {skillsRef}>
                  
                  
                  {/* Development */}

                  <section className="w-[100%] flex flex-col">

                    <div className="flex items-center mt-4">
                      <img className="w-14 mr-2" src={HtmlLogo} alt="Html 5"/>
                      <div className="flex w-[90%] h-[100%] items-center">
                        <div className={ `${skillsVisible? 'skills skillsBg' : ''}` }></div>
                        <div className={ `${skillsVisible ? 'skills skillsPink s80' : '' }` }></div>
                        <div className={ `${skillsVisible? 'skillsWhite s80' : ''}` }></div>
                      </div>
                      <p className="ml-4 rounded-full">{skillsVisible ? <CountUp end={85} duration={1} suffix="%" /> : ''}</p>
                    </div>

                    <div className="flex items-center mt-4">
                      <img className="w-14 mr-2" src={CSSLogo} alt="CSS"/>
                      <div className="flex w-[90%] h-[100%] items-center">
                        <div className={ `${skillsVisible? 'skills skillsBg' : ''}` }></div>
                        <div className={ `${skillsVisible ? 'skills skillsPink s85' : '' }` }></div>
                        <div className={ `${skillsVisible? 'skillsWhite s85' : ''}` }></div>
                      </div>
                      <p className="ml-4 rounded-full">{skillsVisible ? <CountUp end={85} duration={1} suffix="%" /> : ''}</p>
                    </div>

                    <div className="flex items-center mt-4">
                      <img className="w-14 mr-2" src={JavascriptLogo} alt="Javascript"/>
                      <div className="flex w-[90%] h-[100%] items-center">
                        <div className={ `${skillsVisible? 'skills skillsBg' : ''}` }></div>
                        <div className={ `${skillsVisible ? 'skills skillsPink s70' : '' }` }></div>
                        <div className={ `${skillsVisible? 'skillsWhite s70' : ''}` }></div>
                      </div>
                      <p className="ml-4 rounded-full">{skillsVisible ? <CountUp end={70} duration={1} suffix="%" /> : ''}</p>
                    </div>

                    <div className="flex items-center mt-4">
                      <img className="w-14 mr-2" src={ReactLogo} alt="React framework for Javascript"/>
                      <div className="flex w-[90%] h-[100%] items-center">
                        <div className={ `${skillsVisible? 'skills skillsBg' : ''}` }></div>
                        <div className={ `${skillsVisible ? 'skills skillsPink s70' : '' }` }></div>
                        <div className={ `${skillsVisible? 'skillsWhite s70' : ''}` }></div>
                      </div>
                      <p className="ml-4 rounded-full">{skillsVisible ? <CountUp end={70} duration={1} suffix="%" /> : ''}</p>
                    </div>

                    <div className="flex items-center mt-4">
                      <img className="w-14 mr-2" src={TailwindLogo} alt="Tailwind framework for CSS"/>
                      <div className="flex w-[90%] h-[100%] items-center">
                        <div className={ `${skillsVisible? 'skills skillsBg' : ''}` }></div>
                        <div className={ `${skillsVisible ? 'skills skillsPink s85' : '' }` }></div>
                        <div className={ `${skillsVisible? 'skillsWhite s85' : ''}` }></div>
                      </div>
                      <p className="ml-4 rounded-full">{skillsVisible ? <CountUp end={85} duration={1} suffix="%" /> : ''}</p>
                    </div>

                  </section>

                  {/* Design/Git */}
                  <section className="w-[100%] flex flex-col justify-center">

                  <div className="flex items-center mt-4">
                      <img className="w-14 mr-2" src={GitLogo} alt="Git"/>
                      <div className="flex w-[90%] h-[100%] items-center">
                        <div className={ `${skillsVisible? 'skills skillsBg' : ''}` }></div>
                        <div className={ `${skillsVisible ? 'skills skillsBlue s75' : '' }` }></div>
                        <div className={ `${skillsVisible? 'skillsWhite s75' : ''}` }></div>
                      </div>
                      <p className="ml-4 rounded-full">{skillsVisible ? <CountUp end={75} duration={1} suffix="%" /> : ''}</p>
                    </div>

                    <div className="flex items-center mt-4">
                      <img className="w-14 mr-2" src={FigmaLogo} alt="Figma"/>
                      <div className="flex w-[90%] h-[100%] items-center">
                        <div className={ `${skillsVisible? 'skills skillsBg' : ''}` }></div>
                        <div className={ `${skillsVisible ? 'skills skillsBlue s60' : '' }` }></div>
                        <div className={ `${skillsVisible? 'skillsWhite s60' : ''}` }></div>
                      </div>
                      <p className="ml-4 rounded-full">{skillsVisible ? <CountUp end={60} duration={1} suffix="%" /> : ''}</p>
                    </div>

                    <div className="flex items-center mt-4">
                      <img className="w-14 mr-2" src={IllustratorLogo} alt="Adobe Illustrator"/>
                      <div className="flex w-[90%] h-[100%] items-center">
                        <div className={ `${skillsVisible? 'skills skillsBg' : ''}` }></div>
                        <div className={ `${skillsVisible ? 'skills skillsBlue s70' : '' }` }></div>
                        <div className={ `${skillsVisible? 'skillsWhite s70' : ''}` }></div>
                      </div>
                      <p className="ml-4 rounded-full">{skillsVisible ? <CountUp end={70} duration={1} suffix="%" /> : ''}</p>
                    </div>

                    <div className="flex items-center mt-4">
                      <img className="w-14 mr-2" src={GimpLogo} alt="Gimp"/>
                      <div className="flex w-[90%] h-[100%] items-center">
                        <div className={ `${skillsVisible? 'skills skillsBg' : ''}` }></div>
                        <div className={ `${skillsVisible ? 'skills skillsBlue s80' : '' }` }></div>
                        <div className={ `${skillsVisible? 'skillsWhite s80' : ''}` }></div>
                      </div>
                      <p className="ml-4 rounded-full">{skillsVisible ? <CountUp end={80} duration={1} suffix="%" /> : ''}</p>
                    </div>

                  </section>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills