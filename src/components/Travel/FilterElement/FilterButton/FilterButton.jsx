import React from 'react'

function FilterButton({parameter, checkFunc, active}) {
  return (
    <button style={{margin:"1em"}}className={active? 'btn btn-primary active' : 'btn btn-default'} value={parameter} onClick={e=>checkFunc(e)}>{parameter}</button>
  )
}

export default FilterButton