import React from 'react'
import PostInfo from './PostInfo/PostInfo'
import { useState } from 'react'
import classes from "./Post.module.css"

function Post() {
  let postInfo = {"header":"","body":"","id":"1"}

  return (
    // <div style={{display:"flex", flexDirection:"row", height:"100%", width:"100%"}}>
    <div className={classes.gridContainer}>
      <div className={classes.postInfo}>
        <PostInfo postInfo={postInfo}/>
      </div>
      <div className={classes.postPicture}>
        <img className={classes.imgClass} src="/img/forest.jpg" alt="Image of the post" />
      </div> 
    </div>
  )
}

export default Post