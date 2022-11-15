import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-300 h-screen w-full justify-center items-center flex">
        {/* Container */}
        <div className="max-w-[1200px] h-[250px] grid grid-cols-2 gap-8">
            {/* About me */}
            <div className="max-w-[500px] h-[200px]">
                <h2>About me</h2>
                <p>Lorem ipsum</p>
            </div>
            {/* Why me */}
            <div className="max-w-[500px] h-[200px]">
                <h3>Why me</h3>
                <p>Lorem ipsum</p>
            </div>
        </div>
    </div>
  )
}

export default About