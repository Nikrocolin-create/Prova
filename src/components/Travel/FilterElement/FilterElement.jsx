import React from 'react'
import { useState } from 'react'
import FilterButton from './FilterButton/FilterButton';

function FilterElement({parameters, checkFunc}) {

  return (
    <div style={{textAlign:"center"}}>
        <h2>Trova le migliori offerte<select style={{color:"rgb(32,115,206)", border:"0px"}}>
          <option value="roma">da Roma</option>
          <option value="milano">da Milano</option>
          <option value="napoli">da Napoli</option>
        </select></h2> 
        <h2>Verso <select style={{color:"rgb(32,115,206)", border:"0px"}}>
          <option value="qualsiasi">Qualsiasi destinazioni</option>
          <option value="latina">America Latina</option>
          <option value="europa">Europa</option>
        </select></h2>
        <div style={{display:"flex",justifyContent:"center"}}>
            <div style={{borderRight:"1px solid black", paddingRight:"0.5em", paddingTop:"1em"}}>
              <button className="btn" style={{border:"1px solid blue"}}>Filtri</button>
              </div>
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