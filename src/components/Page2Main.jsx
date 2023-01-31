import React from "react";
import { Link } from "react-router-dom";
import livingBg from "../assets/livingroombg.jpg";
import Bulb from "../assets/helpbulb.png";

const Page2Main = () => {
  return (
    <>
      <div className="w-full flex itmes-center justify-center flex-row p-2 gap-2">
        <div className="w-[200px] flex flex-col p-2 bg-white">
          <p className="flex flex-row p-3 text-slate-500 text-sm">
            Living Room
          </p>
          <form>
          <label class="relative inline-flex items-center">
            <input type="checkbox" class="form-checkbox" />
            <span class="w-[40px] h-[20-px] ml-[10px] bg-gray-500 rounded-full shadow-inner"></span>
          </label>
          </form>

          <p className="flex flex-row p-3 text-slate-500 text-sm">Kitchen</p>
          <p className="flex flex-row p-3 text-slate-500 text-sm">
            Master Bedroom
          </p>
          <p className="flex flex-row p-3 text-slate-500 text-sm">
            Master Bathroom
          </p>
          <p className="flex flex-row p-3 text-slate-500 text-sm">Bedroom 2</p>
        </div>

        <div className="flex flex-col p-2 bg-white">
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
            Enable Extra Bedroom 2
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

        <div className="w-lg md:h-[130px] first-letter:flex items-center justify-center p-2 shadow-xl shadow-slate-200 ">
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
