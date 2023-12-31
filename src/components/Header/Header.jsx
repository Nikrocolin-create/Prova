import React from 'react'

import classes from "./Header.module.css"
import HeadButton from '../UI/HeadButton/HeadButton'

function Header({buttons}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{height:"6%"}}>
      <div className="container-fluid">
        <a className="navbar-brand">//</a>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        {
          buttons.map( (parameter) => {
            return <HeadButton key={parameter.id} parameter={parameter}/>
          })
        }
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header