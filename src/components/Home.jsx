import React from 'react'

const Home = () => {
  return (
    <div className="h-screen w-full bg-gray-700 flex justify-center content-center flex">
        {/* Container */}
        <div className="grid grid-cols-2 justify-center items-center max-w-[1000px] mx-auto">
                {/* Welcome text */}
                <div>
                    <h1>Ja sam Kemal</h1>
                    <h1>Frontend developer</h1>
                </div>
                {/* Picture */}
                <div>
                    <img />
                </div>
        </div>
    </div>
  )
}

export default Home