//import React from "react"
import { Chart } from "react-google-charts"

const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
const options = {
    title: "Задачи на день",
  };

export default function Graphics(){
    return (
        <div>
             <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
        </div>
    )
}