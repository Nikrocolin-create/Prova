import React from 'react'
import { useState } from 'react'
import classes from "./LikelyToRecomend.module.css"
import CircleProgressBar from './CircleProgressBar/CircleProgressBar';
function LikelyToRecommend({data}) {
  // const [percentage, setPercentage] = useState(35);
  let recommend = [...data].filter(a=> a.recommend).length
  let percentage = recommend / data.length * 100

  return (
    <div>
      <h6><b>Likely to recomend</b></h6>
      <CircleProgressBar percentage={percentage} responses={data.length} circleWidth="200"/>
        {/* <input type="range" min="1" max="100" step="1" value={percentage} onChange={(e)=>{setPercentage(e.target.value)}}/> */}
    </div>
  )
}

export default LikelyToRecommend
