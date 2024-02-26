// import React from 'react';
// import { LinearProgress } from '@mui/material';

// interface SpeedometerProps {
//   speed: number;
// }

// const Speedometer: React.FC<SpeedometerProps> = ({ speed }) => {
//   return (
//     <div>
//       <h2>Speedometer</h2>
//       <LinearProgress variant="determinate" value={speed} />
//       <p>Speed: {speed} km/h</p>
//     </div>
//   );
// };

// export default Speedometer;

// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';


// const Speedometer: React.FC = () => {
//   const speed = 100;
//   const maxSpeed = 250;
//   const data = {
//     datasets: [
//       {
//         data: [speed, maxSpeed - speed],
//         backgroundColor: ['rgb(75, 192, 192)', 'rgba(0, 0, 0, 0.1)'],
//         borderWidth: 0,
//       },
//     ],
//   };

//   const options = {
//     cutout: '80%',
//     rotation: 0.75 * Math.PI,
//     circumference: 0.5 * Math.PI,
//     tooltips: {
//       enabled: false,
//     },
//     legend: {
//       display: false,
//     },
//     elements: {
//       arc: {
//         borderWidth: 0,
//       },
//     },
//   };

//   return (
//     <div>
//       <Doughnut data={data} options={options} width={200} height={200} />
//       <div style={{ textAlign: 'center' }}>
//         <p>Speed: {speed} km/h</p>
//         <p>Max Speed: {maxSpeed} km/h</p>
//       </div>
//     </div>
//   );
// };

// export default Speedometer;

// import GaugeComponent from 'react-gauge-component'

// function Speedometer() {
//   return (
//     <div>
//       <GaugeComponent
//         arc={{
//           nbSubArcs: 150,
//           colorArray: ["#5BE12C", "#F5CD19", "#EA4228"],
//           width: 0.2,
//           padding: 0.003,
//         }}
//         labels={{
//           valueLabel: {
//             // fontSize: (value): number => 90,
//             // formatTextValue: kbitsToMbits
//             formatTextValue: (value): string => value + "КМ/Ч",
//             style: { fontSize: "35px", fill: "#000" }
//           },
//           tickLabels: {
//             type: "outer",
//             ticks: [
//               { value: 0 },
//               { value: 20 },
//               { value: 40 },
//               { value: 60 },
//               { value: 80 },
//               { value: 100 },
//               { value: 120 },
//               { value: 140 }
//             ],
//             // valueConfig: {
//             //   formatTextValue: kbitsToMbits
//             // }
//           },
//         }}
//         value={75}
//         maxValue={160}
//       />
//     </div>
//   );
// }

// export default Speedometer

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
