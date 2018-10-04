import React, { Component } from 'react'

import './HomeSite.css';
import Header from "../Header/Header";
import LoginSite from "../LoginSite/LoginSite";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import GraphView from "./Tabs/GraphView/GraphView";
import TabContainer from "./Tabs/TabContainer";
import Button from "@material-ui/core/es/Button/Button";

import { connect } from "react-redux";

class HomeSite extends Component {

    state = {
        //userId: 'mrlu123',
        devices: {}
    }

    initDevices = ( array ) => {
        const dict = Object.assign( {}, this.state.devices )
        const subarray = array[ 0 ].slice()
        for ( var i = 0; i < subarray.length; i++ ) {
            let device = subarray[ i ];
            if ( !this.state.devices.hasOwnProperty( device.id ) ) {
                dict [ device.id ] = {
                    name: device.name
                }
            }
        }
        console.log( dict )
        this.setState( {
            devices: dict
        } )
    }

    getDevices = () => {
        this.httpGetAsync( this.state.serverAPI + 'getDevices?userId=' + this.props.userId,
            ( responseText ) => {
                const array = JSON.parse( "[" + responseText + "]" );
                this.initDevices( array )
            } )
    }

    getDayOutput = ( deviceId, date ) => {
        console.log( this.state )
        const dayStr = this.dateToString( date )
        this.httpGetAsync( this.state.serverAPI + 'getTimedDeviceUsage?deviceId=' + deviceId +
            '&fdate=' + dayStr + '&tdate=' + dayStr,
            ( responseText ) => {
                let updatedDevices = Object.assign( {}, this.state.devices )
                console.log( responseText )
                //updatedDevices[deviceId][dayStr] =
            } )
    }

    dateToString = ( date ) => {
        let dd = date.getDate();
        let mm = date.getMonth() + 1; //January is 0!
        const yyyy = date.getFullYear();

        if ( dd < 10 ) {
            dd = '0' + dd
        }

        if ( mm < 10 ) {
            mm = '0' + mm
        }

        return yyyy + '-' + mm + '-' + dd;
    }

    httpGetAsync = ( theUrl, callback ) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if ( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
                console.log( xmlHttp.responseText );
                if ( callback ) {
                    callback( xmlHttp.responseText )
                }
            }
        }
        xmlHttp.open( "GET", theUrl, true ); // true for asynchronous
        xmlHttp.send( null );
    }

    httpPost = ( theUrl ) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    componentWillMount(){
        if ( this.props.userId == '' ) {
            this.props.history.push( '/login' )
        }
    }

    render() {
        return (

            <div className="home-site">
                <Header/>
                <div className="home-site-content-wrapper">
                    <div className="home-site-content">
                        <GraphView/>
                        <TabContainer devices={this.state.devices}/>

                        <Button onClick={() => this.getDayOutput( 'asdf', new Date() )}>GetOutputToday</Button>
                        <Button onClick={() => this.getDevices()}>GetDevices</Button>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userId: state.username
    }
}

export default connect( mapStateToProps )( HomeSite )
