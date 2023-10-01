import React from 'react'

function FilterButton({parameter, checkFunc, active}) {
  return (
    <button style={{margin:"1em", border:"1px solid blue"}} className={active? 'btn btn-primary active' : 'btn'} value={parameter} onClick={e=>checkFunc(e)}>{parameter}</button>
  )
}

export default FilterButton