import React from 'react';
import classes from "./Dashboard.module.css"
import LikelyToRecommend from './LikelyToRecomend/LikelyToRecommend';
import Average from './Average/Average';
import TrendChart from './TrendChart/TrendChart';
import PieChartYear from './PieChartYear/PieChartYear';
import Satisfied from './Satisfied/Satisfied';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Dashboard() {
  let MOCK_DATA = [
    {date:"", satisfaction:5, recommend:true,id:"1"},
    {date:"", satisfaction:4, recommend:true,id:"2"},
    {date:"", satisfaction:6, recommend:true,id:"3"},
    {date:"", satisfaction:5, recommend:false,id:"4"},
    {date:"", satisfaction:5, recommend:true,id:"5"},
    {date:"", satisfaction:5, recommend:true,id:"6"},
    {date:"", satisfaction:10, recommend:false,id:"7"},
    {date:"", satisfaction:5, recommend:true,id:"8"},
    {date:"", satisfaction:9, recommend:true,id:"9"},
    {date:"", satisfaction:5, recommend:true,id:"10"}
  ]
  for (let i = 0; i < 10; i++) {
    MOCK_DATA[i]["clientId"] = getRandomInt(10)
  }

  return(
<div className={classes.gridContainer}>
<div className={classes.chartContainer + " " + classes.chart1}><LikelyToRecommend data={MOCK_DATA}/> </div>
<div className={classes.chartContainer + " " + classes.chart2}> <Satisfied /> </div>
<div className={classes.chartContainer + " " + classes.chart3}> <Average data={MOCK_DATA}/></div>
<div className={classes.chartContainer + " " + classes.chart4}><PieChartYear data={MOCK_DATA}/></div>
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
