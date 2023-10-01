import React from 'react'
import classes from './Satisfied.module.css'
function Satisfied({data}) {
  const BLUE_COLOR = "rgb(125,206,255)"
  const GREY_COLOR = "rgb(240,242,255)"
    let percent= Math.floor([...data].filter(a=>a.satisfaction > 4).length / [...data].length * 100)
    let blue = Math.floor(20 + percent*0.6)
  return (
    <div>
      <h6><b>Satisfied</b></h6>
      <div style={{display:"flex",justifyContent:"center",alignItems:"top", padding:"0", margin:"0"}}>
          <h1 className={classes.colorFont} 
          style={{background:`linear-gradient(to top, ${GREY_COLOR} 19%,${BLUE_COLOR} 19% ${blue}%,${GREY_COLOR} ${blue}%)`,
                  WebkitBackgroundClip:"text",
                  WebkitTextFillColor:"transparent",
                  padding:"0", margin:"0"}}><b>{percent}</b></h1>
          <h1 style={{background:`linear-gradient(to top, ${GREY_COLOR} 19%,${BLUE_COLOR} 19% ${blue}%,${GREY_COLOR} ${blue}%)`,
                  WebkitBackgroundClip:"text",
                  WebkitTextFillColor:"transparent",
                   paddingTop:"0.25em"}}><b style={{fontSize:"30px"}}>%</b></h1>
          {/* <p className={classes.colorFont} 
          style={{background:`linear-gradient( grey 40%,blue 40% 80%,grey 80%)`,
                  WebkitBackgroundClip:"text",
                  WebkitTextFillColor:"transparent",
                  padding:"0", margin:"0"}}>{percent}%</p> */}
          {/* <h1 style={{background: `-webkit-linear-gradient(blue ${percent}, grey ${100-percent});`, WebkitBackgroundClip: "text", WebkitTextFillColor:"transparent"}}>{percent}</h1> */}
      </div>
      <h6>of our customers satisfied</h6>
      <div style={{display:"flex", justifyContent:"center"}}>
        <img className={percent > 95? classes.bigRate : classes.smallRate} src={percent > 95? "/img/rateImg/bigrate1.png": "/img/rateImg/smallrate1.png"} alt="1" />
        <img className={percent > 85? classes.bigRate : classes.smallRate} src={percent > 85? "/img/rateImg/bigrate2.png": "/img/rateImg/smallrate2.png"} alt="2" />
        <img className={percent > 75? classes.bigRate : classes.smallRate} src={percent > 75? "/img/rateImg/bigrate3.png": "/img/rateImg/smallrate3.png"} alt="3" />
        <img className={percent > 65? classes.bigRate : classes.smallRate} src={percent > 65? "/img/rateImg/bigrate4.png": "/img/rateImg/smallrate4.png"} alt="4" />
        <img className={percent > 55? classes.bigRate : classes.smallRate} src={percent > 55? "/img/rateImg/bigrate5.png": "/img/rateImg/smallrate5.png"} alt="5" />
        <img className={percent > 45? classes.bigRate : classes.smallRate} src={percent > 45? "/img/rateImg/bigrate6.png": "/img/rateImg/smallrate6.png"} alt="6" />
        <img className={percent > 35? classes.bigRate : classes.smallRate} src={percent > 35? "/img/rateImg/bigrate7.png": "/img/rateImg/smallrate7.png"} alt="7" />
        <img className={percent > 25? classes.bigRate : classes.smallRate} src={percent > 25? "/img/rateImg/bigrate8.png": "/img/rateImg/smallrate8.png"} alt="8" />
        <img className={percent > 15? classes.bigRate : classes.smallRate} src={percent > 15? "/img/rateImg/bigrate9.png": "/img/rateImg/smallrate9.png"} alt="9" />
        <img className={percent > 5? classes.bigRate : classes.smallRate} src={percent > 5? "/img/rateImg/bigrate10.png": "/img/rateImg/smallrate10.png"} alt="10" />
      </div>
      <div style={{textAlign:"right"}}>
        <button className={classes.viewTrendButton}>VIEW TREND</button>
      </div>
    </div>

  )
}

export default Satisfied