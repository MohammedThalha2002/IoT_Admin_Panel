import React from "react";
import GaugeComponent from "react-gauge-component";

function VI({ value, unit }) {
  return (
    <div>
      {
        <GaugeComponent
          type="semicircle"
          arc={{
            width: 0.2,
            padding: 0.005,
            cornerRadius: 1,
            subArcs: [
              {
                limit: 15,
                color: "#EA4228",
                showTick: true,
              },
              {
                limit: 17,
                color: "#F5CD19",
                showTick: true,
              },
              {
                limit: 28,
                color: "#5BE12C",
                showTick: true,
              },
              {
                limit: 30,
                color: "#F5CD19",
                showTick: true,
              },
              {
                color: "#EA4228",
              },
            ],
          }}
          pointer={{
            color: "#345243",
            length: 0.8,
            width: 15,
            // elastic: true,
          }}
          labels={{
            valueLabel: { formatTextValue: (value) => value + unit },
            tickLabels: {
              type: "outer",
              valueConfig: {
                formatTextValue: (value) => value,
                fontSize: 10,
              },
              ticks: [{ value: 13 }, { value: 22.5 }, { value: 32 }],
            },
          }}
          value={value}
        />
      }
    </div>
  );
}

export default VI;
