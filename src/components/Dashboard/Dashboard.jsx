import React from 'react';
import classes from "./Dashboard.module.css"
import LikelyToRecommend from './LikelyToRecomend/LikelyToRecommend';
import Average from './Average/Average';
import TrendChart from './TrendChart/TrendChart';
import { Chart } from "react-google-charts";

export default function Dashboard() {
  const data = [
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
  return(
<div className={classes.gridContainer}>
<div className={classes.chartContainer + " " + classes.chart1}><LikelyToRecommend/> </div>
<div className={classes.chartContainer + " " + classes.chart2}> </div>
<div className={classes.chartContainer + " " + classes.chart3}> <Average rating={4.8} responses="267"/></div>
<div className={classes.chartContainer + " " + classes.chart4}> 
<Chart
    chartType="PieChart"
    data={data}
    options={options}
    width={"100%"}
    height={"100%"}
  /></div>
<div className={classes.chartContainer + " " + classes.chart5}><TrendChart/></div>
</div>
  );
}

//import { PieChart } from '@mui/x-charts';
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
// const options = {
//   title: {
//     text: 'My chart'
//   },
//   series: [{
//     data: [1, 2, 3]
//   }]
// }
// {/* <HighchartsReact
// highcharts={Highcharts}
// options={options}
// /> */}
