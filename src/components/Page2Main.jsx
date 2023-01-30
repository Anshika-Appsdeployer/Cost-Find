import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import bedroomBg from '../assets/bedroombg.jpg'

const Page2Main = () => {
  return (
    <>
      {/* <Header /> grid grid-rows-4 grid-flow-col gap-4*/}
      <div className="w-full flex flex-row itmes-center justify-center p-2 gap-2">
        <div className="w-[200px] flex flex-col p-2 bg-white">
          <p className="flex flex-row p-3 text-slate-500 text-sm">Living Room</p>
          <p className="flex flex-row p-3 text-slate-500 text-sm">Kitchen</p>
          <p className="flex flex-row p-3 text-slate-500 text-sm">Master Bedroom</p>
          <p className="flex flex-row p-3 text-slate-500 text-sm">Master Bathroom</p>
          <p className="flex flex-row p-3 text-slate-500 text-sm">Bedroom 2</p>
        </div>

        <div className="flex flex-col p-2 bg-white">
          <img src={bedroomBg} className="w-[400px] flex items-center justify-center" alt="Bed Room" />

          <p className="flex items-center justify-center text-slate-500 font-semibold text-sm">
            <span>
              <input type="checkbox" className="m-2 flex flex-start checked:bg-green-400" />
            </span>
            Enable Extra Bedroom 2
          </p>
          <p className="flex flex-start p-2 text-slate-500 text-sm">How would you like to spend on this room?</p>
          <div className="flex flex-row flex-start gap-6">
            <span className="text-slate-500 text-sm font-semibold">
              <input type="radio" className="m-2 flex flex-start checked:bg-green-400" />
              Basic
            </span>
            <span className="text-slate-500 text-sm font-semibold">
              <input type="radio" className="m-2 flex flex-start checked:bg-green-400" />
              Standard
            </span>
            <span className="text-slate-500 text-sm font-semibold">
              <input type="radio" className="m-2 flex flex-start checked:bg-green-400" />
              Lavish
            </span>

          </div>
          <button type="button" className="flex items-center justify-center m-auto text-sm text-white px-4 py-2 bg-green-400">
            <Link to={"/page3"}> Next {'>'} </Link>
          </button>
        </div>
      </div>

    </>
  )
}

export default Page2Main