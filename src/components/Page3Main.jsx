import React from "react";

const Page3Main = () => {
  return (
    <>
      <p className="flex items-center justify-center md:text-md text-2xl text-slate-500 mt-8">
        Your Total Estimate is ₹ 0{}
      </p>
      <div className="flex items-center justify-center gap-4 m-4">
        <div className="w-full h-full flex items-center justify-center shadow-md shadow-slate-200 rounded-md">
          <p className="flex items-center justify-center text-slate-500">
            Room Wise Estimate
          </p>
        </div>
        <div className="w-full h-full flex items-center justify-center shadow-md shadow-slate-200 rounded-md">
          <p className="flex items-center justify-center text-slate-500">
            Scope Wise Estimate
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 m-4">
      <div className="flex flex-col items-center justify-center gap-4 m-2">
        <p className="flex items-center justify-center"><input type="checkbox" id="check" className="bg-red-600" disabled bg-red-600/>Living Room</p>
        <p className="flex items-center justify-center"><input type="checkbox" id="check" className="bg-red-600" disabled checked/>Master Bedroom</p>
        <p className="flex items-center justify-center"><input type="checkbox" id="check" className="bg-red-600" disabled checked/>Master Bathroom</p>
        <p className="flex items-center justify-center"><input type="checkbox" id="check" className="bg-red-600" disabled checked/>Kitchen</p>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 m-2">
        <p className="flex items-center justify-center"><input type="checkbox" id="check" className="bg-red-600" disabled bg-red-600/>Flooring</p>
        <p className="flex items-center justify-center"><input type="checkbox" id="check" className="bg-red-600" disabled checked/>Walls</p>
      </div>
      </div>

      <p className="w-full flex items-center justify-center mt-2 text-slate-500 text-sm">
        Approx. 15% Amount may vary upon specific requirements or if special
        customization has to be made
      </p>
      <button
        type="button"
        className="flex items-center justify-center m-auto text-sm mt-4 px-4 py-2 bg-white rounded-lg button-lg outline"
      >
        Download Estimate
      </button>
    </>
  );
};

export default Page3Main;
