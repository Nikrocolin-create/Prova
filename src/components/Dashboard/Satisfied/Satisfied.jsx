import React from 'react'
import classes from './Satisfied.module.css'
function Satisfied() {
    let percent=17
  return (
    <div>
        <h1><b className={classes.colorFont} style={{background:`linear-gradient( grey 40%,blue 40% 80%,grey 80%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{percent}</b>%</h1>
        {/* <h1 style={{background: `-webkit-linear-gradient(blue ${percent}, grey ${100-percent});`, WebkitBackgroundClip: "text", WebkitTextFillColor:"transparent"}}>{percent}</h1> */}
    </div>
  )
}

export default Satisfied