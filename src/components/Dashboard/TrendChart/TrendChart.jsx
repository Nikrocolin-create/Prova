import React, { Component } from 'react'
import Chart from 'react-google-charts'
const LineData = [
  ['x', 'Satisfaction', 'Likelyhood to recomend'],
  ["September", 0, 0],
  ["October", 10, 5],
  ["November", 23, 15],
  ["December", 17, 9],
  ["January", 18, 10],
  ["February", 9, 5],
  ["March", 11, 3],
  ["April", 27, 19],
]
const LineChartOptions = {
//   hAxis: {
//     title: 'Time',
//   },
  legend: "bottom",
  vAxis: {
    title: 'Percentage',
  },
//   series: {
//     1: { curveType: 'function' },
//   },
}
class TrendChart extends Component {
  render() {
    return (
      <div className="container mt-5">
        <select name="group-select" id="group-select">
          <option value="month">By month</option>
          <option value="quarter">By quarter</option>
          <option value="year">By year</option>
        </select>
        <Chart
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={LineData}
          options={LineChartOptions}
          rootProps={{ 'data-testid': '2' }}
        />
      </div>
    )
  }
}
export default TrendChart