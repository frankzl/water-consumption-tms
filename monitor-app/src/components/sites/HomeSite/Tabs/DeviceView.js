import React from 'react'
import "./DeviceView.css"
import Button from "@material-ui/core/Button";

const style = {
    border: 10,
    padding: 0,
    flex: '50%'
}

const deviceView = ( props ) => {
    return ( <Button color="primary" variant="contained"
                     onClick={props.redirect}
                     style={style}>
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
    </Button> )
}

export default deviceView