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
    {clientId:"1",date:"", satisfaction:5, recommend:true,id:"1"},
    {clientId:"1",date:"", satisfaction:5, recommend:true,id:"2"},
    {clientId:"1",date:"", satisfaction:6, recommend:true,id:"3"},
    {clientId:"2",date:"", satisfaction:1, recommend:false,id:"4"},
    {clientId:"2",date:"", satisfaction:4, recommend:true,id:"5"},
    {clientId:"2",date:"", satisfaction:1, recommend:true,id:"6"},
    {clientId:"3",date:"", satisfaction:1, recommend:false,id:"7"},
    {clientId:"3",date:"", satisfaction:5, recommend:true,id:"8"},
    {clientId:"4",date:"", satisfaction:9, recommend:true,id:"9"},
    {clientId:"5",date:"", satisfaction:1, recommend:true,id:"10"}
  ]
  // for (let i = 0; i < 10; i++) {
  //   MOCK_DATA[i]["clientId"] = getRandomInt(10)
  // }
  for (let i = 0; i < 10; i++) {
    let date = new Date();
    date.setDate(i)
    
    const options = {year: 'numeric', month: 'numeric', day: 'numeric' };
    MOCK_DATA[i]["date"] = date.toLocaleDateString('en-us',options)
  }
  console.log(MOCK_DATA)

  return(
<div className={classes.gridContainer}>
<div className={classes.chartContainer + " " + classes.chart1}><LikelyToRecommend data={MOCK_DATA}/> </div>
<div className={classes.chartContainer + " " + classes.chart2}> <Satisfied data={MOCK_DATA}/> </div>
<div className={classes.chartContainer + " " + classes.chart3}> <Average data={MOCK_DATA}/></div>
<div className={classes.chartContainer + " " + classes.chart4}><PieChartYear data={MOCK_DATA}/></div>
<div className={classes.chartContainer + " " + classes.chart5}><TrendChart data={MOCK_DATA}/></div>
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
