import React from 'react'
import { Chart } from "react-google-charts";

function PieChartYear({data}) {
    let result = Object.groupBy([...data], ({ clientId }) => clientId);
    console.log(result)
    let pie_data = [
        ["Group", "Flights per year"],
        ["6+ times a year", 0],
        ["3-5 times a year", 0],
        ["Three times a year", 0],
        ["Twice a year", 0],
        ["One time a year", 0],
    ]
    for (let key of Object.keys(result)) {
        console.log()
        if ( pie_data[key].length > 5) {
            pie_data[1][1]++
        } else if (pie_data[key].length > 3) {
            pie_data[2][1]++
        } else if (pie_data[key].length >  2) {
            pie_data[3][1]++
        } else if (pie_data[key].length >  1) {
            pie_data[4][1]++
        } else {
            pie_data[5][1]++
        
    }
    console.log(pie_data)

    const data1 = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ];
      
      const options = {
        legend: "bottom"
      };
  return (
    <Chart
    chartType="PieChart"
    data={pie_data}
    options={options}
    width={"100%"}
    height={"100%"}
  />
  )
}
}

export default PieChartYear;