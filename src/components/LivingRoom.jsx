import React from 'react'

const LivingRoom = () => {
  return (
    <div className="flex flex-col m-4 p-2 bg-white">
      <p className="flex items-center justify-center text-slate-500 font-semibold text-sm">
            <span>
              <input
                type="checkbox"
                className="m-2 flex flex-start checked:bg-green-400"
              />
            </span>
            Enable Living Room
          </p>
          <p className="flex flex-start p-2 text-slate-500 text-sm">
            How would you like to spend on this room?
          </p>
          <div className="flex flex-row flex-start gap-6">
            <span className="text-slate-500 text-sm font-semibold">
              <input
                type="radio"
                className="m-2 flex flex-start checked:bg-green-400"
              />
              Basic
            </span>
            <span className="text-slate-500 text-sm font-semibold">
              <input
                type="radio"
                className="m-2 flex flex-start checked:bg-green-400"
              />
              Standard
            </span>
            <span className="text-slate-500 text-sm font-semibold">
              <input
                type="radio"
                className="m-2 flex flex-start checked:bg-green-400"
              />
              Lavish
            </span>
            <div className="flex items-center justify-center m-2 ">
            <span>
              <input
                type="checkbox"
                className="m-2 flex flex-start checked:bg-green-400"
              />
            </span>
              Flooring
            </div>

            <div className="flex items-center justify-center m-2 ">
            <span>
              <input
                type="checkbox"
                className="m-2 flex flex-start checked:bg-green-400"
              />
            </span>
              Flooring
            </div>

            <div className="flex items-center justify-center m-2 ">
            <span>
              <input
                type="checkbox"
                className="m-2 flex flex-start checked:bg-green-400"
              />
            </span>
              Walls
            </div>

            <div className="flex items-center justify-center m-2 ">
            <span>
              <input
                type="checkbox"
                className="m-2 flex flex-start checked:bg-green-400"
              />
            </span>
              Ceiling
            </div>
            <div className="flex items-center justify-center m-2 ">
            <span>
              <input
                type="checkbox"
                className="m-2 flex flex-start checked:bg-green-400"
              />
            </span>
              Electricals
            </div>

            <div className="flex items-center justify-center m-2 ">
            <span>
              <input
                type="checkbox"
                className="m-2 flex flex-start checked:bg-green-400"
              />
            </span>
              Windows
            </div>

            <div className="flex items-center justify-center m-2 ">
            <span>
              <input
                type="checkbox"
                className="m-2 flex flex-start checked:bg-green-400"
              />
            </span>
              Doors
            </div>

            <div className="flex items-center justify-center m-2 ">
            <span>
              <input
                type="checkbox"
                className="m-2 flex flex-start checked:bg-green-400"
              />
            </span>
              Furniture
            </div>
            
          </div>
          <button
            type="button"
            className="flex items-center justify-center m-auto text-sm text-white px-4 py-2 bg-green-400"
          >
            <Link to={"/page3"}> Next Room {">"} </Link>
          </button>
    </div>
  )
}

export default LivingRoom