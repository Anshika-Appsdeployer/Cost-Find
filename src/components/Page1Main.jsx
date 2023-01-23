import React from 'react'
import livingroom from '../assets/livingroom.png'
import bedroom from '../assets/bedroom.png'
import bathroom from '../assets/livingroom.png'
import kitchen from '../assets/kitchen.png'


const Page1Main = () => {
    return (
        <>
        <div className="w-full p-2">
            <div>
                <div className="w-full flex items-center justify-center text-2xl text-slate-500 mt-10 mb-2">
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
                <div className="w-sm flex flex-row p-0.5 bg-green-400 rounded-lg mr-4">
                    <span>
                        <button className="p-1">-</button>
                    </span>
                    <input className="outline-none" />
                    <span>
                        <button className="p-1">+</button>
                    </span>
                </div>

                <div className="w-sm flex flex-row p-0.5 bg-green-400 rounded-lg mr-4">
                    <span>
                        <button className="p-1">-</button>
                    </span>
                    <input className="outline-none" />
                    <span>
                        <button className="p-1">+</button>
                    </span>
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

        <div className="p-2">
            <div className="flex items-center justify-center">
                <img src={livingroom} alt="Living Room" />
            </div>
        </div>
        <div className="p-2">
            <div className="flex items-center justify-center">
                <img src={bedroom} alt="Bed Room" />
            </div>
        </div>
        <div className="p-2">
            <div className="flex items-center justify-center">
                <img src={bathroom} alt="Bath Room" />
            </div>
        </div>
        <div className="p-2">
            <div className="flex items-center justify-center">
                <img src={kitchen} alt="Kitchen" />
            </div>
        </div>

        <button type="button" className="flex items-center justify-center m-auto text-sm text-white px-4 py-2 bg-green-400">
            Next >
        </button>
        </>
    )
}

export default Page1Main