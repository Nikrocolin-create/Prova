import React, { Component } from 'react'
import { useState } from 'react'
import LineChart from './LineChart/LineChart'

function TrendChart({data, aggregationPeriod, setAggregationPeriod}) {
    let chartData = []
    let toDisplay = [['x', 'Satisfaction', 'Likelyhood to recomend']];
    function aggregate(period) {
      for (let record of [...data]) {
        let arrayDate = record['date'].split('/')
        let dateToInsert;
        if (period == "month") {
          dateToInsert = arrayDate[0]+"/"+arrayDate[2];
        } else if (period == "quarter") {
          dateToInsert = arrayDate[0]+"/"+arrayDate[2];
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
    aggregate("month");
    return (
      <LineChart toDisplay={toDisplay} setAggregationPeriod={aggregate} aggregationPeriod={"month"}/>
    )
}
export default TrendChart