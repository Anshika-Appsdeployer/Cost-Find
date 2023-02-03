import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import livingBg from "../assets/livingroombg.jpg";
import Bulb from "../assets/helpbulb.png";
import {
  TOGGLE_LIVINGROOM,
} from "../redux/Counter";

const Page2Main = () => {
  const dispatch = useDispatch();
  const [isToggled, setIsToggled] = useState(false);

  const setClickedToggle = (e) => {
    setIsToggled(e.target.value);
  }

  return (
    <>
      <div className="flex justify-center flex-row p-2 gap-2">
        <div className="w-[400px] flex flex-col m-4 p-2 bg-white">
          <p className="flex flex-row p-3 text-slate-500 text-sm">
            Living Room
            <label
              forEach="check"
              className="relative w-8 ml-auto flex flex-row bg-gray-300 cursor-pointer rounded-full"
            >
              <input type="checkbox" id="check" className="sr-only peer" onClick={() => {
                dispatch(TOGGLE_LIVINGROOM());

              }}/>
              <span className="w-3 h-3 m-1 bg-white rounded-full peer-checked:bg-purple-800 peer-checked:translate-x-3 transition-all duration-400"></span>
            </label>
          </p>

          <p className="flex flex-row p-3 text-slate-500 text-sm">
            Kitchen
            <label
              forEach="check"
              className="relative w-8 ml-auto flex flex-row bg-gray-300 cursor-pointer rounded-full"
            >
              <input type="checkbox" id="check" className="sr-only peer" />
              <span className="w-3 h-3 m-1 bg-white rounded-full peer-checked:bg-purple-800 peer-checked:translate-x-3 transition-all duration-400"></span>
            </label>
          </p>
          <p className="flex flex-row p-3 text-slate-500 text-sm">
            Master Bedroom
            <label
              forEach="check"
              className="relative w-8 ml-auto flex flex-row bg-gray-300 cursor-pointer rounded-full"
            >
              <input type="checkbox" id="check" className="sr-only peer" />
              <span className="w-3 h-3 m-1 bg-white rounded-full peer-checked:bg-purple-800 peer-checked:translate-x-3 transition-all duration-400"></span>
            </label>
          </p>
          <p className="flex flex-row p-3 text-slate-500 text-sm">
            Master Bathroom
            <label
              forEach="check"
              className="relative w-8 ml-auto flex flex-row bg-gray-300 cursor-pointer rounded-full"
            >
              <input type="checkbox" id="check" className="sr-only peer" />
              <span className="w-3 h-3 m-1 bg-white rounded-full peer-checked:bg-purple-800 peer-checked:translate-x-3 transition-all duration-400"></span>
            </label>
          </p>
        </div>

        <div className="flex flex-col m-4 p-2 bg-white outline-2">
          <img
            src={livingBg}
            className="w-[400px] flex items-center justify-center"
            alt="Bed Room"
          />

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
          </div>
          <button
            type="button"
            className="flex items-center justify-center m-auto text-sm text-white px-4 py-2 bg-green-400"
          >
            <Link to={"/page3"}> Next {">"} </Link>
          </button>
        </div>

        <div className="w-[400px] m-4 h-[130px] first-letter:flex items-center justify-center p-2 shadow-xl shadow-slate-200 ">
          <div className="flex items-center justify-center text-lg  mt-2 text-slate-500">
            Net Estimate ₹ 0
          </div>
          <p className="flex items-between justify-between m-2 text-slate-500 text-sm">
            Estimate includes labour cost + material cost
          </p>
          <button
            type="button"
            className="flex items-center justify-center m-auto text-sm text-justify text-white px-4 py-2 bg-green-400"
          >
            <Link to={"/page3"}> Get Detailed Estimate </Link>
          </button>
          <div>
            <p className="flex items-between justify-between m-6 text-slate-500 text-sm text-justify">
              A variation upto + or - 15% could occur in cases where your space
              has specific requirements not accounted in the Costfinder. The
              CostFinder uses current optimised market rates to budget your
              dream space.
            </p>
          </div>
          <div className="flex items-center justify-center object-fit">
            <img src={Bulb} className="w-20 lg:w-30" />
          </div>
          <div className="flex items-center justify-center">
            <button className="text-white mt-3 px-4 py-1 bg-indigo-300 rounded-lg">
              HELP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2Main;
