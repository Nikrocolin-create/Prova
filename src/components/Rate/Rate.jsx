import React from 'react'
import RateButton from './RateButton/RateButton'
import classes from "./Rate.module.css"
import SubmitButton from './SubmitButton/SubmitButton'

function Rate({currentValue, selectFunc, postId}) {
  console.log("currentValue")
  console.log(currentValue)
    // console.log("postId")
    // console.log(postId)
    // console.log("selectFunc")
    // console.log(selectFunc)
  let numbers = []
  for(let i =1; i < 11; i++) {
     numbers.push(i);
  }
  function sendRate() {
    const tokenString = sessionStorage.getItem('token');

    fetch('http://localhost:8080/rate/${postId}'+"?clientID="+tokenString, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
      .then(data => console.log(data))
  }
  return (
    <div className={classes.rate} style={{textAlign:"left"}}>
        <h5><b>How do you rate this post?</b></h5>
        <div style={{display:"flex",width:"25em",justifyContent:"space-between"}}>
            <div style={{float:"left"}}>Very bad</div>
            <div style={{float:"right"}}>Very good</div>
        </div>
        <div style={{display:"flex"}}>
        {numbers.map((num)=>{
            let active = currentValue == num;
            return <RateButton selectFunc={selectFunc} active={active} number={num}/>
        }) }
        </div>
        <div className={classes.buttonClass}>
            <SubmitButton onClick={sendRate}>OK</SubmitButton>
        </div>
    </div>
  )
}

export default Rate