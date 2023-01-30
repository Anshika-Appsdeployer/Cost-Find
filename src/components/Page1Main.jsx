import React from 'react'
import { Link } from 'react-router-dom'
// import { useSelector, useDispatch } from "react-redux";
import livingroom from '../assets/livingroom.png'
import bedroom from '../assets/bedroom.png'
import bathroom from '../assets/bathroom.png'
import kitchen from '../assets/kitchen.png'


const Page1Main = () => {
    // const myState1 = useSelector((state) => state.changeBathroom);

    return (
        <>
            <div className="w-full p-2">
                <div>
                    <div className="w-full flex items-center justify-center md:text-md text-2xl text-slate-500 mt-10 mb-2">
                        Budget your Spend
                    </div>
                    <h6 className="w-full flex items-center justify-center mt-2 text-slate-500 text-sm">
                        CostFinder helps you figure out your average spend based on the elements you like in your space
                    </h6>
                </div>
                <div className="w-full flex flex-row items-center justify-center">
                    <div className="p-8 mb-2 text-lg text-gray-500 font-semibold">
                        Start with how many Bedrooms do you have?
                    </div>

                    <div className="p-8 mb-2 text-lg text-gray-500 font-semibold">
                        Start with how many Bathrooms do you have?
                    </div>
                </div>

                <div className="w-full flex flex-row items-center justify-center gap-10">
                    <div className="w-sm flex flex-row p-0.5 bg-green-400 rounded-md mr-4">

                        <button className="p-1">-</button>
                        <input className="w-[100px] p-1 bg-white text-slate-500 text-sm" value="1" disabled="true" />
                        <button className="p-1">+</button>

                    </div>

                    <div className="w-sm flex flex-row p-0.5 bg-green-400 rounded-md mr-4">

                        <button className="p-1">-</button>
                        <input className="w-[100px] p-1 bg-white text-slate-500 text-sm" value="1"  disabled="true" />
                        <button className="p-1">+</button>

                    </div>
                </div>

                <h6 className="w-full flex items-center justify-center mt-4 text-slate-500 text-sm">
                    Assumed Carpet Area (Sq. ft.)
                </h6>
                <h3 className="flex items-center justify-center p-1 text-cyan-600 text-lg font-semibold">
                    510 Sq. ft.
                </h3>
                <h6 className="w-full flex items-center justify-center text-slate-500 text-sm">
                    Please enter your Carpet Area (Sq. ft.)
                </h6>

                <div className="flex m-4 items-center justify-center rounded-sm p-0.5 bg-green-500">
                    <input className="outline-none" />
                </div>
                <h6 className="w-full flex items-center justify-center text-slate-500 text-sm">
                    Assumed Configuration
                </h6>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
                <div className="flex items-center justify-center p-4 gap-8 shadow-md shadow-slate-200 rounded-md">
                    <img src={livingroom} className="w-[100px]" alt="Living Room" />
                    <p className="flex items-center justify-center text-slate-500 text-sm">Living Room</p>
                    <p className="flex items-center justify-center text-slate-500 text-sm">1</p>
                </div>


                <div className="flex items-center justify-center p-4 gap-8 shadow-md shadow-slate-200 rounded-md">
                    <img src={bedroom} className="w-[100px]" alt="Bed Room" />
                    <p className="flex items-center justify-center text-slate-500 text-sm">Master Bedroom</p>
                    <p className="flex items-center justify-center text-slate-500 text-sm">1</p>
                </div>

                <div className="flex items-center justify-center p-4 gap-8 shadow-md shadow-slate-200 rounded-md">
                    <img src={bathroom} className="w-[100px]" alt="Bath Room" />
                    <p className="flex items-center justify-center text-slate-500 text-sm">Master Bathroom</p>
                    <p className="flex items-center justify-center text-slate-500 text-sm">1</p>

                </div>

                <div className="flex items-center justify-center p-4 gap-8 shadow-md shadow-slate-200 rounded-md">
                    <img src={kitchen} className="w-[100px]" alt="Kitchen" />
                    <p className="flex items-center justify-center text-slate-500 text-sm">Kitchen</p>
                    <p className="flex items-center justify-center text-slate-500 text-sm">1</p>
                </div>


                <button type="button" className="flex items-center justify-center m-auto text-sm text-white px-4 py-2 bg-green-400">
                    <Link to={"/page2"}> Next {'>'} </Link>
                </button>
            </div>
        </>
    )
}

export default Page1Main