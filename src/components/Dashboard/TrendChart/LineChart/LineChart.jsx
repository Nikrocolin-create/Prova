import React from 'react'
import Chart from 'react-google-charts'
import { useState } from 'react';
const ChartOptions = {
    legend: "bottom",
    vAxis: {
      title: 'Percentage',
    },
  }
function LineChart({setAggregationPeriod, aggregationPeriod, data}) {
  let toDisplay = [['x', 'Satisfaction', 'Likelyhood to recomend']];
  let chartData = []
  function aggregate(period) {
    for (let record of [...data]) {
      let arrayDate = record['date'].split('/')
      let dateToInsert;
      if (period == "month") {
        dateToInsert = arrayDate[0]+"/"+arrayDate[2];
      } else if (period == "quarter") {
        let quarter = 0;
        if (Number(arrayDate[0]) < 4) {
          quarter = 1
        } else if (Number(arrayDate[0]) < 7) {
          quarter = 2
        } else if (Number(arrayDate[0]) < 10) {
          quarter = 3
        } else {
          quarter = 4
        }
        dateToInsert = quarter+"/"+arrayDate[2];
      } else {
        dateToInsert = arrayDate[2];
      }
      chartData.push({"date":dateToInsert, "satisfaction":record["satisfaction"], "recommend":record["recommend"]})
    }
    let result = Object.groupBy(chartData, ({ date }) => date);
    for(let key in result) {
      let sumSatisfaction = 0;
      let sumRecommend = 0;
      for(let record of result[key]) {
        sumSatisfaction += record["satisfaction"];
        sumRecommend += record["recommend"]? 1:0; 
      }
      sumSatisfaction /= (result[key].length * 10)
      sumRecommend /= result[key].length
      toDisplay.push([key, sumSatisfaction, sumRecommend])
    }
  }
  if (chartData.length == 0) aggregate(aggregationPeriod)
  // 
  return (
    <div>
    <select name="group-select" id="group-select" onChange={(e)=>setAggregationPeriod(e.target.value)}>
      <option value="month">By month</option>
      <option value="quarter">By quarter</option>
      <option value="year">By year</option>
    </select>
    <Chart
      chartType="LineChart"
      loader={<div>Loading Chart</div>}
      data={toDisplay}
      options={ChartOptions}
      rootProps={{ 'data-testid': '2' }}
    />
  </div>
  )
}

export default LineChart