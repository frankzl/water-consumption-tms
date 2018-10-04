import React from "react"
import BarChart from "react-svg-bar-chart"

const data = []

for ( let x = 1; x <= 30; x++ ) {
    data.push( { x: x, y: Math.floor( Math.random() * 100 ) } )
}

const barchart = () => {
    return (
        <div style={{padding: '30px'}}>
            <BarChart viewBoxHeight={600} data={data}/>
        </div>
    )
}
export default barchart