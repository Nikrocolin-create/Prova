import React from 'react'
import classes from "./DigitalFeedback.module.css"
import Post from '../Post/Post'
function DigitalFeedback() {
  return (
    <div className={classes.digitalFeedback}>
      <div>DigitalFeedback</div>
      <Post/>
    </div>
    
  )
}

export default DigitalFeedback