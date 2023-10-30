import React from "react";
import { useState } from "react";
import "../App.css";
import GaugeComponent from "react-gauge-component";
import GaugeChart from "react-gauge-chart";
import Thermometer from "react-thermometer-component";
import "react-circular-progressbar/dist/styles.css";
import LineChart from "./LineChart";
import { UserData } from "./Data";

function SecondColumn() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="flex-col">
      <div className="thermometer ml-[33%] top-[-290px] drop-shadow-lg shadow-slate-600 absolute flex flex-col">
        {" "}
        <Thermometer
          theme="light"
          value="18"
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
            percent={0.37}
            arcPadding={0.02}
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
            value={50}
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
            value={50}
          />
          <h3 className="font-semibold p-5">Sound</h3>
        </div>
      </div>
      <div className="flex mt-[3%]">
        <div className="h-[38vh] w-[46vw] ml-[2.5%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 flex items-center justify-center ">
          <LineChart chartData={userData} />
        </div>
        <div className="h-[38vh] w-[17vw] ml-[3%] bg-[#f6f6f6] rounded-md drop-shadow-lg shadow-slate-600 ">
          <h3 className="flex justify-center items-center">Front/Back</h3>
        </div>
      </div>
    </div>
  );
}

export default SecondColumn;
