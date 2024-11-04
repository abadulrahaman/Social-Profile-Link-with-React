import React from 'react'
const Body = () => {
  return (
    <div className="bg-zinc-900 flex h-screen justify-center items-center">
      <div className="bg-zinc-800 h-[600px] w-[400px] rounded-[8px] p-10">
        <div className="flex justify-center items-center rounded-[50%]  mb-4">
          <img
            className="h-[80px] w-[90px] rounded-[50%]"
            src="logo.jpeg"
            alt="Error"
          />
        </div>

        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[30px] text-white font-bold">Jessica Randall</h1>
          <p className="text-[16px] text-yellow-300">London, United Kingdom</p>
          <p className="text-[16px] text-white mt-5">
            "Front-end Developer and avid reader"
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-3 text-white text-[18px] mt-5">
          <div className="flex justify-center items-center font-bold bg-zinc-700 p-3 w-full rounded-[8px] hover:bg-zinc-600 hover:text-yellow-300 transition duration-300 hover:scale-105">
            <a href="https://github.com/abadulrahaman" target='blank'>Github</a>
          </div>
          <div className="flex justify-center items-center font-bold bg-zinc-700 p-3 w-full rounded-[8px] hover:bg-zinc-600 hover:text-yellow-300 transition duration-300 hover:scale-105">
            <a href="https://www.linkedin.com/in/md-rahman-rain-206098334/" target='blank'>
              Linkedin
            </a>
          </div>
          <div className="flex justify-center items-center font-bold bg-zinc-700 p-3 w-full rounded-[8px] hover:bg-zinc-600 hover:text-yellow-300 transition duration-300 hover:scale-105">
            <a href="https://www.instagram.com/rahaman_rain786/" target='blank'>Instagram</a>
          </div>
          <div className="flex justify-center items-center font-bold bg-zinc-700 p-3 w-full rounded-[8px] hover:bg-zinc-600 hover:text-yellow-300 transition duration-300 hover:scale-105">
            <a href="https://www.facebook.com/profile.php?id=100077331016354" target='blank'>
              Facebook
            </a>
          </div>
          <div className="flex justify-center items-center font-bold bg-zinc-700 p-3 w-full rounded-[8px] hover:bg-zinc-600 hover:text-yellow-300 transition duration-300 hover:scale-105">
            <a href="https://www.youtube.com/@roboteyegaming8568" target='blank'>Youtube</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
