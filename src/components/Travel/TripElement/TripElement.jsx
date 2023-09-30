import React from 'react'
import classes from "./TripElement.module.css"
function TripElement({id, cityName, price, description, imgSrc, showInfo}) {
  return (
    <div onClick={(e)=>showInfo({id})} className={classes.main}>
        <img className={classes.imgPart} src={imgSrc} alt={imgSrc}/>
        <div>
          <table style={{width:"100%", padding:"1em"}}>
            <thead>
              <tr>
                <td style={{width:"50%",fontSize:"20px", paddingLeft:"10px", paddingTop:"10px"}}><b>{cityName}</b></td>
                <td rowSpan={2} style={{width:"50%", textAlign:"right",fontSize:"25px",color:"rgb(32,115,206)",paddingRight:"1em"}}>da <b>{price}€</b></td>
              </tr>
              <tr>
                <td style={{width:"50%",fontSize:"15px", paddingLeft:"10px"}}>{description}</td>
              </tr>
            </thead>
          </table>
        </div>
    </div>
  )
}

export default TripElement