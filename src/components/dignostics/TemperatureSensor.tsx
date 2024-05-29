import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';
import GaugeComponent from 'react-gauge-component';


function TemperatureSensor() {
  const [temperature, setTemperature] = useState(30.5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newTemperature = faker.datatype.number({ min: 0, max: 120 });
      setTemperature(newTemperature);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <GaugeComponent
        type="semicircle"
        arc={{
          width: 0.3,
          padding: 0.006,
          cornerRadius: 2,
          subArcs: [
            {
              limit: 40,
              color: "#5BE12C ",
              showTick: true,
              tooltip: {
                text: "ОК",
              },
              onClick: () => console.log("AAAA"),
              onMouseMove: () =>
                console.log("BBBBBB"),
              onMouseLeave: () =>
                console.log("CCCCCC"),
            },
            {
              limit: 80,
              color: "#F5CD19",
              showTick: true,
              tooltip: {
                text: "Too low temperature!",
              },
            },
            {
              limit: 120,
              color: "#EA4228",
              showTick: true,
              tooltip: {
                text: "Low temperature!",
              },
            },
          ],
        }}
        pointer={{
          color: "#345243",
          length: 0.8,
          width: 15,
        }}
        labels={{
          valueLabel: {
            formatTextValue: (value) => value + "ºC",
            style: { fontSize: "25px", fill: "#000" },
          },
          tickLabels: {
            type: "outer",
            ticks: [{ value: 20 }, { value: 60 }, { value: 100 }, { value: 120 }],
          },
        }}
        value={temperature}
        minValue={0}
        maxValue={120}
      />
    </div>
  );
}

export default TemperatureSensor;
