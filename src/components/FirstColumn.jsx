import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../App.css";

function FirstColumn({ oilViscosity, rpm, vibration }) {
  return (
    <div className="flex-col">
      <div className="h-[85vh] w-[15vw] ml-[7%] mt-[13%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 flex-col pl-[5%]">
        <div className="flex flex-col justify-center items-center mb-8">
          <CircularProgressbar
            className="w-[14vw] h-[20vh]"
            value={oilViscosity}
            text={`${oilViscosity}`}
          />
          <h3 className="font-semibold">
            Oil Viscosity <span className="text-xs">(m^2/s)</span>
          </h3>
        </div>
        <div className="flex flex-col justify-center items-center mb-8">
          <CircularProgressbar
            className="w-[14vw] h-[20vh]"
            value={rpm}
            text={`${rpm}`}
          />
          <h3 className="font-semibold">RPM</h3>
        </div>
        <div className="flex flex-col justify-center items-center mb-8">
          <CircularProgressbar
            className="w-[14vw] h-[20vh]"
            value={vibration}
            text={`${vibration}`}
          />
          <h3 className="font-semibold">
            Vibration <span className="text-xs">(Hz)</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default FirstColumn;
