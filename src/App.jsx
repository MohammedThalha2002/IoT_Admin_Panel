import React from "react";
import "./App.css";
import "react-circular-progressbar/dist/styles.css";
import FirstColumn from "./components/FirstColumn";
import SecondColumn from "./components/SecondColumn";
export default function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] relative overflow-hidden">
        <div className="h-[100vh] w-[17vw] bg-[#4e4eb0] ml-[13%]"></div>
        <div
          className="h-[90vh] w-[90vw] bg-[#f6f6f6] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] 
         rounded-lg shadow-slate-600 shadow-2xl flex"
        >
          <div className="h-[90vh] w-[1px] bg-[#b2beb5] ml-[8.9%]"></div>
          <FirstColumn />
          <div className="h-[90vh] w-[1px] ml-[2%] bg-[#b2beb5]"></div>
          <SecondColumn/>
        </div>
      </div>
    </>
  );
}
