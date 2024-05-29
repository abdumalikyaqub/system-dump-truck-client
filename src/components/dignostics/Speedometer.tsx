import { faker } from '@faker-js/faker';
import { useState, useEffect } from 'react';
import GaugeComponent from 'react-gauge-component';

function Speedometer() {
  const [speed, setSpeed] = useState(75);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newSpeed = faker.datatype.number({ min: 0, max: 160 });
      setSpeed(newSpeed);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <GaugeComponent
        arc={{
          nbSubArcs: 150,
          colorArray: ["#5BE12C", "#F5CD19", "#EA4228"],
          width: 0.2,
          padding: 0.003,
        }}
        labels={{
          valueLabel: {
            formatTextValue: (value) => value + "КМ/Ч",
            style: { fontSize: "35px", fill: "#000" }
          },
          tickLabels: {
            type: "outer",
            ticks: [
              { value: 0 },
              { value: 20 },
              { value: 40 },
              { value: 60 },
              { value: 80 },
              { value: 100 },
              { value: 120 },
              { value: 140 }
            ],
          },
        }}
        value={speed}
        maxValue={160}
      />
    </div>
  );
}

export default Speedometer;
