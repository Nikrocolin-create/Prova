import React from 'react'
import classes from "./HeadButton.module.css"
import { Link } from 'react-router-dom'

function HeadButton({parameter}) {
  return (
    <li key={parameter.id}>
        <Link key={parameter.link} to={parameter.link} className={classes.headLink+" nav-link"} aria-current="page"  >{parameter.name}</Link>
    </li>
  )
}

export default HeadButton