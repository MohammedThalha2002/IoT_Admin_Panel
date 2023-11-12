import React from "react";
import "./App.css";
import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import FirstColumn from "./components/FirstColumn";
import SecondColumn from "./components/SecondColumn";
export default function App() {
  const [oilLevel, setOilLevel] = useState(0);
  const [rpm, setRpm] = useState(0);
  const [vibration, setVibration] = useState(0);
  const [thermometer, setThermometer] = useState(0);
  const [coolentLevel, setCoolentLevel] = useState(0);
  const [friction, setFriction] = useState(0);
  const [sound, setSound] = useState(0);
  const [voltage, setVoltage] = useState(0);
  const [current, setCurrent] = useState(0);
  const [position, setPosition] = useState("FRONT");

  return (
    <>
      <div className="w-[100vw] h-[100vh] relative overflow-hidden">
        <div className="h-[100vh] w-[17vw] bg-[#4e4eb0] ml-[13%]"></div>
        <div
          className="h-[90vh] w-[90vw] bg-[#f6f6f6] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] 
         rounded-lg shadow-slate-600 shadow-2xl flex"
        >
          <div className="h-[90vh] w-[1px] bg-[#b2beb5] ml-[8.9%]"></div>
          <FirstColumn oilLevel={oilLevel} rpm={rpm} vibration={vibration} />
          <div className="h-[90vh] w-[1px] ml-[2%] bg-[#b2beb5]"></div>
          <SecondColumn
            thermometer={thermometer}
            coolentLevel={coolentLevel}
            friction={friction}
            sound={sound}
            position={position}
            current={current}
            voltage={voltage}
          />
        </div>
      </div>
    </>
  );
}
