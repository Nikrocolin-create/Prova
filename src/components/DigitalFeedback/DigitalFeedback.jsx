import React from 'react'
import classes from "./DigitalFeedback.module.css"
import Post from '../Post/Post'
function DigitalFeedback() {
  return (
    <div className={classes.digitalFeedback}>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div style={{marginTop:"0px", paddingTop:"0px", paddingLeft:"0.5em"}}>
          <h2 style={{color:"white",paddingTop:"0.5em"}}>DIGITAL FEEDBACK</h2>
          <h5 style={{color:"white", paddingBottom:"1em"}}>Intercept program playground</h5>
        </div>
        <h6 style={{float:"right",color:"white", paddingBottom:"1em",paddingTop:"1.1em", paddingRight:"0.25em"}}>HOME / LINKS / ABOUT / CONTACT</h6>
      </div>
      <Post/>
    </div>
    
  )
}

export default DigitalFeedback