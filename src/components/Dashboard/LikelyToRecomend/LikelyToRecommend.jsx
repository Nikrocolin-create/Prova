import React from 'react'
import { useState } from 'react'
import classes from "./LikelyToRecomend.module.css"
import CircleProgressBar from './CircleProgressBar/CircleProgressBar';
function LikelyToRecommend() {
  const [percentage, setPercentage] = useState(35);
  return (
    <div >
      <h6><b>Likely to recomend</b></h6>
      <CircleProgressBar percentage={percentage} circleWidth="200"/>
        <input type="range" min="1" max="100" step="1" value={percentage} onChange={(e)=>{setPercentage(e.target.value)}}/>

    </div>
  )
}

export default LikelyToRecommend
