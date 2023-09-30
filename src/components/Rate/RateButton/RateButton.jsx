import React from 'react'
import classes from "./RateButton.module.css"
function RateButton({number, active, selectFunc}) {
  let currentClass = active?classes.rateButtonActive:classes.rateButtonPassive;
  return (
    <div key={number} onClick={e=>selectFunc(e.target)} className={currentClass} value={number}>{number}</div>
  )
}

export default RateButton