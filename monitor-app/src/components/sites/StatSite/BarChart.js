import React from "react"
import BarChart from "react-svg-bar-chart"
import connect from "react-redux/es/connect/connect";

const data = []

for ( let x = 1; x <= 30; x++ ) {
    data.push( { x: x, y: Math.floor( Math.random() * 100 ) } )
}


const barchart = (props) => {
    console.log(props.data)
    return (
        <div style={{ padding: '30px' }}>
            <BarChart viewBoxHeight={600} data={props.data}/>
        </div>
    )
}

export default connect()( barchart )