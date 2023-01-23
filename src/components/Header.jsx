import React from 'react'

const Header = () => {
    return (
        <header className="w-screen p-2 flex flex-col items-center justify-center bg-purple-800">
            <div className="w-screen mt-1 flex items-center justify-center text-white text-2xl">
                5ELEMENTS
            </div>
            <div className="w-screen border-b-[10px] border-b-purple-800 flex items-center justify-center text-white text-sm">
                COST FINDER
                {/* <div className="w-2 border-1 rounded-full flex flex-col items-center justify-center">
                    <span>1</span>
                    <span>Space Details</span>
                </div>
                <div className="w-2 border-1 rounded-full flex flex-col items-center justify-center">
                    <span>2</span>
                    <span>Your Needs</span>
                </div>
                <div className="w-2 border-1 rounded-full flex flex-col items-center justify-center">
                    <span>3</span>
                    <span>Get Estimate</span>
                </div> */}
            </div>
        </header>
    )
}

export default Header