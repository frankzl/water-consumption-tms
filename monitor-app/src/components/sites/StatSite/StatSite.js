import React from 'react'
import DeviceHeader from "../Header/DeviceHeader";
import RangeControl from "./RangeControl";
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

import './StatSite.css'
import connect from "react-redux/es/connect/connect";
import BarChart from "./BarChart";

class StatSite extends React.Component {

    state = {
        weightRange: 'WEEK'
    }

    render() {
        const theme = createMuiTheme();

        return ( <div>
            <DeviceHeader title={this.props.devices[this.props.match.params.id].name}/>
            <div className="home-site-content-wrapper" style={{ flexDirection: 'column', alignItems: 'center' }}>
                <div className="home-site-content" style={{ padding: '10px', width: '100%' }}>
                    <MuiThemeProvider theme={theme}>
                        <RangeControl/>
                    </MuiThemeProvider>
                </div>
                <br/>
                <div className="total-usage">
                    <div style={{ fontWeight: 'bold' }}>Total Usage</div>
                    <div style={{ marginTop: '10px', fontSize: '35px', fontWeight: 'bold' }}>
                        {Math.round(this.props.devices[this.props.match.params.id].total*100)/100}
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
                        your goal: {this.props.devices[this.props.match.params.id].limit}
                        <span style={{ marginLeft: '5px' }}>liters</span>
                    </div>
                    <BarChart data={this.props.deviceData}/>
                </div>
            </div>
        </div> )
    }

}

const mapStateToProps = ( state ) => {
    return {
        totalToday: state.totalToday,
        devices: state.devices,
        deviceData: state.deviceData
    }
}

export default connect( mapStateToProps )( StatSite )