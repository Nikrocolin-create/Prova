import React from 'react'

function CircleProgressBar({percentage, circleWidth, responses}) {
    const radius = circleWidth*85/200;
    const dashArray = radius * Math.PI * 2
    const dashOffset = dashArray - (dashArray * percentage*0.825) / 100;
    const strokeWidth = "10px";
  return (
        <div style={{textAlign:"center"}}>
            <svg 
            width={circleWidth * 0.95}
            height={circleWidth * 0.90} 
            viewBox={`0 0 ${circleWidth * 0.9} ${circleWidth * 0.9}`}>

                <text x={circleWidth*0.37} y={circleWidth*0.3} fontSize="15" fill="black">Top 2%</text>
                <text x={circleWidth*0.35} y={circleWidth*0.45} fontSize="30" fill="black">{percentage}%</text>
                <text x={circleWidth*0.35} y={circleWidth*0.55} fontSize="15" fill="black">At target</text>
                <text x={circleWidth*0.45} y={circleWidth*0.65} fontSize="15" fill="black">0</text>
                <circle 
                cx={(circleWidth*1.05)/2} 
                cy={circleWidth*1.05/2} 
                strokeWidth={strokeWidth} 
                r={radius}
                className='circle-background'
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashArray - (dashArray*0.825),
                    zIndex:5
                }}
                transform={`rotate(-240 ${circleWidth/2} ${circleWidth/2})`}
                />
                <circle cx={circleWidth*1.05/2} 
                cy={circleWidth*1.05/2} 
                strokeWidth={strokeWidth}  
                r={radius}
                className='circle-progress'
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset,
                    zIndex:5
                }}
                transform={`rotate(-240 ${circleWidth/2} ${circleWidth/2})`}/>
            </svg>
            <div style={{display:"flex",justifyContent:"space-between",textAlign:"center",width:circleWidth*0.8,paddingLeft:"10px",paddingRight:"10px",margin:"auto"}} >
                    <span>0%</span>
                    <span>100%</span>
            </div>
            <div style={{textAlign:"center"}}>
                <h6>Responses</h6>
                <h4 style={{}}>{responses}</h4>
            </div>
            <div style={{display:"block",textAlign:"center",width:circleWidth*0.8,paddingLeft:"10px",paddingRight:"10px",margin:"auto"}} >

            </div>

        </div>
  )
}

export default CircleProgressBar