import React from 'react'
import { useState } from 'react'
import FilterButton from './FilterButton/FilterButton';

function FilterElement({parameters, checkFunc}) {

  return (
    <div style={{textAlign:"center"}}>
        <h2>Trova le migliori offerte<span style={{color:"rgb(32,115,206)"}}> da Roma</span></h2> 
        <h2>Verso <span style={{color:"rgb(32,115,206)"}}>Qualsiasi Destinazioni</span></h2>
        <div style={{display:"flex",justifyContent:"center"}}>
            {
              Object.keys(parameters).map( key => {
                return <FilterButton key={key} parameter={key} active={parameters[key]} checkFunc={checkFunc}/>
              })
            }
        </div>
    </div>
  )
}

export default FilterElement