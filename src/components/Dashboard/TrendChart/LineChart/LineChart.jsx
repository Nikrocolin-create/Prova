import React from 'react'
import Chart from 'react-google-charts'
import { useState } from 'react';
const ChartOptions = {
    legend: "bottom",
    vAxis: {
      title: 'Percentage',
    },
  }
function LineChart({toDisplay,setAggregationPeriod, aggregationPeriod}) {
  return (
    <div>
    <select name="group-select" id="group-select" onSelect={e=>setAggregationPeriod(e.target.value)}>
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