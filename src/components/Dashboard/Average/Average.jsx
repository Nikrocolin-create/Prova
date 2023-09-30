import React from 'react'
import classes from "./Average.module.css"
import "./Average.css"
function Average({data}) {
  let rating = [...data].reduce((sum, a)=>sum+=Number(a.satisfaction),0) / data.length
  console.log(data)
  console.log(rating)
  let responses = data.length
  return (
    <div style={{padding:"0"}}>
      <h6><b>Average</b></h6>
      <p>
        Overall how satisfied are you with the Delta Airlines?
      </p>
<svg style={{display:"none"}}>
  <defs>
    <symbol id="fivestars">
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd" transform="translate(24)"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd" transform="translate(48)"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd" transform="translate(72)"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd"  transform="translate(96)"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd"  transform="translate(120)"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd"  transform="translate(144)"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd"  transform="translate(168)"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd"  transform="translate(192)"/>
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z M0 0 h24 v24 h-24 v-24" fill="white" fill-rule="evenodd"  transform="translate(216)"/>
    </symbol>
  </defs>
</svg>
<div className="rating scaled" style={{marginLeft:"20%",marginTop:"8%",marginBottom:"8%"}}>
  <progress className="rating-bg" value={rating} max="10"></progress>
  <svg><use xlinkHref="#fivestars"/></svg>
</div>
<h2>{rating}</h2>
<p style={{fontSize:"7px"}}>Responses: {responses}</p>
<h6 style={{color:"green"}}>KEY DRIVERS</h6>
    </div>
  )
}

export default Average