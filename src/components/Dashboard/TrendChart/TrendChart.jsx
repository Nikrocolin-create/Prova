import React, { Component } from 'react'
import Chart from 'react-google-charts'
import { useState } from 'react'
import LineChart from './LineChart/LineChart'

function TrendChart({data}) {
    const [period, setPeriod] = useState("month");
    function updatePeriod(value) {
      setPeriod(value)
    }
    return (
      <LineChart data={data} setAggregationPeriod={updatePeriod} aggregationPeriod={period}/>
    )
}
export default TrendChart