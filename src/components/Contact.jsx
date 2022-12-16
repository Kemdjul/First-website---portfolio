import React from 'react'
import { useInView } from 'react-intersection-observer'

const Contact = () => {
  const { ref: contactRef, inView: contactVisible } = useInView();

  return (
    <div className="bg-background text-white h-screen w-full justify-center items-center flex pt-28" id="contact">
        {/* Container */}
        <form className="min-w-[35%] flex flex-col" action="" ref={contactRef}>
          <div className="text-center">
            <h2 className={`${contactVisible ? 'about text-[2.441rem] drop-shadow-neonBlue font-orbitron' : ''} `}>Kontakt</h2>
            <p className="font-lato mt-4">Kontaktirajte me ukoliko ste zainteresirani surađivati sa mnom</p>
          </div>

          <input className="w-full h-8 mt-8 bg-gray-800" type="text" placeholder="Unesite vaše ime" name="ime"></input>
          <input className="w-full h-8 mt-2 bg-gray-800" type="email" placeholder="Unesite vašu e-mail adresu" name="e-mail"></input>
          <textarea className="w-full h-64 mt-2 bg-gray-800" placeholder="Unesite vašu poruku" name="message"></textarea>
          <button className="px-8 py-2 my-8 mx-auto border-2 border-gray-500 hover:bg-gray-500 transition w-fit">Surađujmo</button>
        </form>
    </div>
  )
}

export default Contact