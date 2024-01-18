import React from "react";
import "../App.css";
import GaugeComponent from "react-gauge-component";
import GaugeChart from "react-gauge-chart";
import Thermometer from "react-thermometer-component";
import "react-circular-progressbar/dist/styles.css";
import VI from "./VI";

function SecondColumn({
  thermometer,
  coolentLevel,
  friction,
  sound,
  position,
  current,
  voltage,
  beltPosition,
}) {
  return (
    <div className="flex-col">
      <h3 className="z-100 ml-[33%] font-semibold pt-2">
        Temperature <span className="text-xs">(°C)</span>
      </h3>
      <div className="thermometer ml-[33%] top-[-290px] drop-shadow-lg shadow-slate-600 absolute flex flex-col">
        {" "}
        <Thermometer
          theme="light"
          value={thermometer}
          max="100"
          steps="4"
          format="°C"
          size="large"
          height="700"
        />
      </div>
      <div className="flex justify-center items-center mt-[15%]">
        <div className="h-[25vh] w-[20vw] ml-[3%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 flex flex-col justify-center items-center ">
          <GaugeChart
            id="gauge-chart5"
            nrOfLevels={420}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={["#5BE12C", "#F5CD19", "#EA4228"]}
            percent={coolentLevel / 100}
            formatTextValue={(val) => val + "°C"}
            arcPadding={0.02}
            textColor=""
          />
          <h3 className="font-semibold">Motor Temperature</h3>
        </div>
        <div className="h-[25vh] w-[20vw] ml-[3%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 flex flex-col justify-center items-center  ">
          <GaugeChart
            id="gauge-chart5"
            nrOfLevels={420}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={["#5BE12C", "#F5CD19", "#EA4228"]}
            percent={friction / 100}
            formatTextValue={(val) => val + "Nm"}
            arcPadding={0.02}
            textColor=""
          />
          <h3 className="font-semibold">Torque</h3>
        </div>
        <div className="h-[25vh] w-[20vw] ml-[3%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 flex flex-col justify-center items-center ">
          <GaugeChart
            id="gauge-chart5"
            nrOfLevels={520}
            arcsLength={[0.3, 0.5, 0.2]}
            colors={["#5BE12C", "#F5CD19", "#EA4228"]}
            percent={sound / 100}
            formatTextValue={(val) => val + "db"}
            arcPadding={0.02}
            textColor=""
          />
          <h3 className="font-semibold p-5">Sound</h3>
        </div>
      </div>
      <div className="flex mt-[3%]">
        <div className="h-[38vh] w-[46vw] ml-[2.5%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 flex items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
            <VI value={voltage} unit="V" />
            <h3 className="font-semibold p-5">
              Voltage <span className="text-xs">(V)</span>
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <VI value={current} unit="A" />
            <h3 className="font-semibold p-5 ">
              Current <span className="text-xs">(A)</span>
            </h3>
          </div>
        </div>

        <div className="h-[38vh] w-[17vw] ml-[3%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 ">
          <div className="h-1/2 border border-b-0 rounded-md border-black">
            <h3 className="flex justify-center items-center font-semibold mt-2">
              Position
            </h3>
            <div className="flex justify-center items-center h-full w-full">
              <h1 className="font-bold mb-16 text-2xl">{position}</h1>
            </div>
          </div>
          <div className="h-1/2 border rounded-md border-black">
            <h3 className="flex justify-center items-center font-semibold mt-2">
              Belt Position
            </h3>
            <div className="flex justify-center items-center h-full w-full">
              <h1 className="font-bold mb-16 text-2xl">{beltPosition}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondColumn;
