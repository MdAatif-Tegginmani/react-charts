import React from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory';

const datas = [
  { x: 'Apples', y: 35 },
  { x: 'Bananas', y: 40 },
  { x: 'Oranges', y: 98 },
  { x: 'Mangos', y: 20 },
  { x: 'Pineapples', y: 45 },
];

const barChart = () => {
  return (
    <div>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10}
      >
       
      
        <VictoryBar
          data={datas}
          x="x"
          y="y"

        style={{

            
            
            data: {
                fill: "#000",
                width: 25
                
            }
          }

        }

        />
      </VictoryChart>
    </div>
  );
};

export default barChart;
