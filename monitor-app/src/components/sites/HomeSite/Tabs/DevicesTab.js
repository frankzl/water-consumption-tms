import React, { Component } from 'react'
import DeviceView from "./DeviceView";
import "./DevicesTab.css"
import { connect } from "react-redux";
import MuiThemeProvider from "@material-ui/core/es/styles/MuiThemeProvider";
import green from "@material-ui/core/es/colors/green";
import createMuiTheme from "@material-ui/core/es/styles/createMuiTheme";
import Button from "@material-ui/core/es/Button/Button";
import AddIcon from '@material-ui/icons/Add'
import PopUp from "./PopUp";
import { withRouter } from "react-router-dom";
import * as actionTypes from "../../../../store/actions";
class DevicesTab extends Component {

    state = {
        open: false,
        deviceList: [
            {
                name: 'shower downstairs',
                total: 10.4,
                limit: 11
            },
            {
                name: 'tap-kitchen',
                total: 1.4,
                limit: 12
            }, {
                name: 'garden',
                total: 100.3,
                limit: 12
            },
            {
                name: 'shower upstairs',
                total: 5.4,
                limit: 12
            }, {
                name: 'tap bathroom',
                total: 10.4,
                limit: 12
            },
            {
                name: 'tap-kitchen',
                total: 35.4,
                limit: 12
            },
        ]
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    redirectTo = (deviceId) => {
        const today = new Date()
        const lastweek = new Date()
        lastweek.setDate( today.getDate() - 7)

        this.props.loadDevice(deviceId, lastweek, today)
        this.props.history.push('/device/'+deviceId)
    }

    componentDidMount(){
        console.log('looo', this.props.userId)
        this.props.update(this.props.userId)
    }

    render() {

        const style = {
            border: 10,
            padding: 0,
            width: '50%'
        }

        const theme = createMuiTheme( {
            palette: {
                primary: { main: '#f0f9fe' },
            },
            shadows: [ 'none' ]
        } );

        let deviceView = []

        const toD = new Date()
        const fromD = new Date()
        fromD.setDate(toD.getDate() - 6)

        console.log(toD.toDateString())
        console.log(fromD.toDateString())

        for ( let device in this.props.devices ) {
            deviceView.push(
                <DeviceView key={device}
                            loadDevice={()=>this.props.loadDevice(device, fromD, toD)}
                            redirect={()=>this.redirectTo(device)}
                            name={this.props.devices[ device ].name}
                            total={this.props.devices[ device ].total}
                            limit={this.props.devices[ device ].limit}/> )
        }
        return (
            <MuiThemeProvider theme={theme}>
                <div className="devices-tab">
                    {deviceView}
                    <Button color="primary" variant="contained"
                            onClick={this.handleOpen}
                            style={style}>
                        <div className="device-view-inner" style={{color: 'rgba(0,0,0,0.7)'}}>
                            <AddIcon/>
                        </div>
                    </Button>
                </div>
                <PopUp open={this.state.open} onClose={this.handleClose}/>
            </MuiThemeProvider>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {
        devices: state.devices,
        userId: state.username
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update: ( id ) => dispatch(actionTypes.getDevices(id)),
        loadDevice: (id, fromD, toD) => dispatch(actionTypes.getDeviceData(id, fromD, toD))
    }
}
export default connect( mapStateToProps, mapDispatchToProps )( withRouter(DevicesTab ))

