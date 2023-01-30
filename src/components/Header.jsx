import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <header className="w-screen p-2 flex flex-col items-center justify-center bg-purple-800">
                <div className="w-screen mt-1 flex items-center justify-center text-white text-2xl">
                    5ELEMENTS
                </div>
                <div className="w-screen border-b-[10px] border-b-purple-800 flex items-center justify-center text-white text-sm">
                    COST FINDER
                </div>
            </header>

            <div className="w-lg gap-6 text-sm text-semibold flex flex-row items-center justify-center bg-slate-400">
                <Link to={"/page1"}><div>1 Space Details</div></Link>
                <Link to={"/page2"}><div>2 Your Needs</div></Link>
                <Link to={"/page3"}><div>3 Get Estimate</div></Link>
            </div>
        </>
    )
}

export default Header