import React from 'react'
import classes from './SubmitButton.module.css'
function SubmitButton({children, ...props}) {
  return (
    <button className={classes.submitButton} {...props} >{children}</button>
  )
}

export default SubmitButton