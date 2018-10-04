import React from 'react'
import DeviceHeader from "../Header/DeviceHeader";
import RangeControl from "./RangeControl";
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

import './StatSite.css'
import connect from "react-redux/es/connect/connect";
import BarChart from "./BarChart";
import { withRouter } from "react-router-dom";

class StatSite extends React.Component {

    render() {
        const theme = createMuiTheme();

        return ( <div>
            <DeviceHeader title={this.props.match.params.id}/>
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
                        {this.props.devices[this.props.match.params.id].total}
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
                        your goal: {this.props.devices[this.props.match.params.id].limit}
                        <span style={{ marginLeft: '5px' }}>liters</span>
                    </div>
                    <BarChart/>
                </div>
            </div>
        </div> )
    }

}

const mapStateToProps = ( state ) => {
    return {
        totalToday: state.totalToday,
        devices: state.devices
    }
}

export default connect( mapStateToProps )( StatSite )