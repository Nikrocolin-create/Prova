import React from 'react';
import classes from "./Dashboard.module.css"
import LikelyToRecommend from './LikelyToRecomend/LikelyToRecommend';
import Average from './Average/Average';
import TrendChart from './TrendChart/TrendChart';
import PieChartYear from './PieChartYear/PieChartYear';
import Satisfied from './Satisfied/Satisfied';
import { useState, useEffect} from 'react';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Dashboard() {
  const [dashoboardData, setDashboardData] = useState([])


  useEffect(() => {
    let fetchUserData = async () => {
      await fetch("http://localhost:8080/data/get")
        .then(response => {
          return response.json()
        })
        .then(data => {
          setDashboardData(data["data"])
        })
    }
  
    fetchUserData()
  }, [])

  if (dashoboardData.length > 0) {
    return(
      <div className={classes.gridContainer}>
        <div className={classes.chartContainer + " " + classes.chart1}><LikelyToRecommend data={dashoboardData}/> </div>
        <div className={classes.chartContainer + " " + classes.chart2}> <Satisfied data={dashoboardData}/> </div>
        <div className={classes.chartContainer + " " + classes.chart3}> <Average data={dashoboardData}/></div>
        <div className={classes.chartContainer + " " + classes.chart4}><PieChartYear data={dashoboardData}/></div>
        <div className={classes.chartContainer + " " + classes.chart5}><TrendChart data={dashoboardData}/></div>
      </div>
    );
  } else {
    return (
      <div>Waiting data...</div>
    )
  }

}
