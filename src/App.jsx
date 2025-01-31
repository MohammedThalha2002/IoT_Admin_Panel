import React, { useState, useEffect } from "react";
import "./App.css";
import "react-circular-progressbar/dist/styles.css";
import FirstColumn from "./components/FirstColumn";
import SecondColumn from "./components/SecondColumn";
import { db } from "./firebase/config";
import { onValue, ref, set } from "firebase/database";

export default function App() {
  const [oilViscosity, setOilViscosity] = useState(0);
  const [rpm, setRpm] = useState(0);
  const [vibration, setVibration] = useState(0);
  const [thermometer, setThermometer] = useState(0);
  const [coolentLevel, setCoolentLevel] = useState(0);
  const [friction, setFriction] = useState(0);
  const [sound, setSound] = useState(0);
  const [voltage, setVoltage] = useState(0);
  const [current, setCurrent] = useState(0);
  const [position, setPosition] = useState("FRONT");
  const [beltPosition, setBeltPosition] = useState("REAR");

  useEffect(() => {
    // const initialSensorValues = {
    //   oilViscosity: 23,
    //   rpm: 120,
    //   vibration: 30,
    //   thermometer: 34,
    //   coolentLevel: 20,
    //   friction: 12,
    //   sound: 320,
    //   voltage: 240,
    //   current: 10,
    //   position: "FRONT",
    //   beltPosition: "REAR",
    // };
    // set(ref(db, "sensor-values"), initialSensorValues);
    //
    const query = ref(db, "sensor-values");
    return onValue(query, (snapshot) => {
      if (snapshot.exists()) {
        const res = snapshot.val();
        // console.log(res);
        setOilViscosity(res.oilViscosity);
        setRpm(res.rpm);
        setVibration(res.vibration);
        setThermometer(res.thermometer);
        setCoolentLevel(res.coolentLevel);
        setFriction(res.friction);
        setSound(res.sound);
        setVoltage(res.voltage);
        setCurrent(res.current);
        setPosition(res.position);
        setBeltPosition(res.beltPosition);
      }
    });
  }, []);

  return (
    <>
      <div className="w-[100vw] h-[100vh] relative overflow-hidden">
        <div className="h-[100vh] w-[17vw] bg-[#4e4eb0] ml-[13%]"></div>
        <div
          className="h-[90vh] w-[90vw] bg-[#f6f6f6] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] 
         rounded-lg shadow-slate-600 shadow-2xl flex"
        >
          <div className="h-[90vh] w-[1px] bg-[#b2beb5] ml-[8.9%]"></div>
          <FirstColumn
            oilViscosity={oilViscosity}
            rpm={rpm}
            vibration={vibration}
          />
          <div className="h-[90vh] w-[1px] ml-[2%] bg-[#b2beb5]"></div>
          <SecondColumn
            thermometer={thermometer}
            coolentLevel={coolentLevel}
            friction={friction}
            sound={sound}
            position={position}
            current={current}
            voltage={voltage}
            beltPosition={beltPosition}
          />
        </div>
      </div>
    </>
  );
}
