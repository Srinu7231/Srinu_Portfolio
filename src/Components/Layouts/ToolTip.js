import React from 'react'
import "../../index.css"

export default function ToolTip({msg="Currently unavailable"},style="") {
  return (
    <span className= {`tool-tip-container ${style!=""&&style}`}>
    <div style={{backgroundColor:"yellow"}}/>
    <div className='tool-tip'>
        {msg}
    </div>
    </span>
  )
}
