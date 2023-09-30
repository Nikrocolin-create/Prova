import React from 'react'
import Rate from '../../Rate/Rate'
import classes from "./PostInfo.module.css"
import { useState } from 'react'
import mockData from './postMock'

function PostInfo(postInfo) {
  const [grade, setGrade] = useState();

  function changeGradeFunc (target) {
      console.log("New value - "+target.getAttribute("value"))
      setGrade(target.getAttribute("value"))
  }
  return (
    <div className={classes.postInfo}>
      <div style={{textAlign:"center",width:"100%"}}>
        <div className={classes.dateSectionStyle}><h5>{mockData.date}//{mockData.section}</h5></div>
        <p className={classes.headerStyle}>{mockData.header}</p>
        <hr className={classes.breakStyle}/>
        <div className={classes.descriptionStyle}>{mockData.description}</div>
        <div></div>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Rate postId={postInfo.id} selectFunc={changeGradeFunc} currentValue={grade}/>
      </div>
      
    </div>
  )
}

export default PostInfo