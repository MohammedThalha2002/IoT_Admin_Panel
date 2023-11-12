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
}) {
  return (
    <div className="flex-col">
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
            percent={coolentLevel}
            arcPadding={0.02}
            textColor=""
          />
          <h3 className="font-semibold">Coolent Level</h3>
        </div>
        <div className="h-[25vh] w-[20vw] ml-[3%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 flex flex-col justify-center items-center  ">
          <GaugeComponent
            type="semicircle"
            arc={{
              colorArray: ["#00FF15", "#FF2121"],
              padding: 0.02,
              subArcs: [
                { limit: 40 },
                { limit: 60 },
                { limit: 70 },
                {},
                {},
                {},
                {},
              ],
            }}
            pointer={{ type: "blob", animationDelay: 0 }}
            value={friction}
            className="text-slate-950"
          />
          <h3 className="font-semibold">Friction</h3>
        </div>
        <div className="h-[25vh] w-[20vw] ml-[3%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 flex flex-col justify-center items-center ">
          <GaugeComponent
            className="h-[20vh] w-[18vw]"
            arc={{
              subArcs: [
                {
                  limit: 20,
                  color: "#EA4228",
                  showTick: true,
                },
                {
                  limit: 40,
                  color: "#F58B19",
                  showTick: true,
                },
                {
                  limit: 60,
                  color: "#F5CD19",
                  showTick: true,
                },
                {
                  limit: 100,
                  color: "#5BE12C",
                  showTick: true,
                },
              ],
            }}
            value={sound}
          />
          <h3 className="font-semibold p-5">Sound</h3>
        </div>
      </div>
      <div className="flex mt-[3%]">
        <div className="h-[38vh] w-[46vw] ml-[2.5%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 flex items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
            <VI value={voltage} unit="V" />
            <h3 className="font-semibold p-5">Voltage</h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <VI value={current} unit="A" />
            <h3 className="font-semibold p-5 ">Current</h3>
          </div>
        </div>

        <div className="h-[38vh] w-[17vw] ml-[3%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 ">
          <h3 className="flex justify-center items-center font-semibold mt-2">
            Position
          </h3>
          <div className="flex justify-center items-center h-full w-full">
            <h1 className="font-bold mb-16 text-2xl">{position}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondColumn;
