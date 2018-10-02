import React from 'react'
import "./DeviceView.css"


const deviceView = ( props ) => {
    return ( <div className="device-view">
        <div className="device-view-inner">
            <div className="device-name">
                {props.name}
            </div>
            <span className="total-font">
                {props.total}
            </span>
            <span className="unit-font">
                L
            </span>
        </div>
    </div> )
}

export default deviceView