import React from 'react'
import DeviceHeader from "../Header/DeviceHeader";
import RangeControl from "./RangeControl";
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";

import './StatSite.css'
import connect from "react-redux/es/connect/connect";
import BarChart from "./BarChart";
import * as actionTypes from "../../../store/actions";

class StatSite extends React.Component {

    state = {
        weightRange: 'WEEK'
    }

    handleUnitSwitch = value => {
        this.setState( { weightRange: value } );

        const today = new Date()

        this.props.loadDevice( this.props.match.params.id, this.getFromDate(value), today )
    }

    getFromDate = (format) => {
        const fd = new Date()
        console.log(fd.getY)
        switch (format){
            case 'DAY': return fd;
            case 'WEEK': fd.setDate(fd.getDate()-7); return fd;
            case 'MONTH': fd.setMonth(fd.getMonth()-1); return fd;
            case 'YEAR': fd.setFullYear(fd.getFullYear()-1); return fd;
            default:
                return fd;
        }
    }


    render() {
        const theme = createMuiTheme();

        return ( <div>
            <DeviceHeader title={this.props.devices[ this.props.match.params.id ].name}/>
            <div className="home-site-content-wrapper" style={{ flexDirection: 'column', alignItems: 'center' }}>
                <div className="home-site-content" style={{ padding: '10px', width: '100%' }}>
                    <MuiThemeProvider theme={theme}>
                        <RangeControl weightRange={this.state.weightRange} handle={this.handleUnitSwitch}/>
                    </MuiThemeProvider>
                </div>
                <br/>
                <div className="total-usage">
                    <div style={{ fontWeight: 'bold' }}>Total Usage</div>
                    <div style={{ marginTop: '10px', fontSize: '35px', fontWeight: 'bold' }}>
                        {Math.round( this.props.devices[ this.props.match.params.id ].total * 100 ) / 100}
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 'bold' }}>
                        your goal: {this.props.devices[ this.props.match.params.id ].limit}
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


const mapDispatchToProps = dispatch => {
    return {
        loadDevice: ( id, fromD, toD ) => dispatch( actionTypes.getDeviceData( id, fromD, toD ) )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( StatSite )