import React, { useState } from "react";
import BatteryGauge from "react-battery-gauge";
import Progress from "react-circle-progress-bar";
import "../App.css";
function FirstColumn({ oilLevel, rpm, vibration }) {
  return (
    <div className="flex-col">
      <div className="h-[20vh] w-[15vw] ml-[7%] mt-[5%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 flex flex-col justify-center items-center ">
        <h3 className="font-semibold">Oil Viscosity</h3>
        <BatteryGauge value={oilLevel} height={150} width={200} />
      </div>
      <div className="h-[60vh] w-[15vw] ml-[7%] mt-[13%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 flex-col pl-[5%]">
        <div className="flex flex-col justify-center items-center">
          <Progress className="w-[14vw] h-[25vh]" progress={rpm} />
          <h3 className="font-semibold">RPM</h3>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Progress className="w-[14vw] h-[25vh]" progress={vibration} />
          <h3 className="font-semibold">Vibration</h3>
        </div>
      </div>
    </div>
  );
}

export default FirstColumn;
