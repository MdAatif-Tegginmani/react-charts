import React from "react";

import { VictoryPie } from "victory";

const charts = () => {
  const data = [
    { x: "Cats", y: 45 },
    { x: "Dogs", y: 60 },
    { x: "Birds", y: 15 },
    { x: "cows", y: 25 },
  ];

  const newbie =[
    {x:"frontEnd",y:25},
    {x:"backEnd" ,y:25},
    {x:"fullStack" , y:35}
]
  return (
    <div>
      <VictoryPie
        data={data}
        colorScale={["#FF9800", "#FFEB3B", "#4CAF50", "#000"]}
        style={{ labels: { fontSize: 10, fill: "black" } }}
        cornerRadius={({ datum }) => datum.y * 0.5}

        // startAngle={90}
        // endAngle={360}
      />

      <VictoryPie 
      
      data={newbie}/>



    </div>
  );
};

export default charts;
