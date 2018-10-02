import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import LoginSite from "./components/sites/LoginSite/LoginSite";
import HomeSite from "./components/sites/HomeSite/HomeSite";

class App extends Component {

    state = {
        currentTemperature: 0
    }

    httpGet = ( theUrl ) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    httpPost = ( theUrl ) => {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
        xmlHttp.send( null );
        return xmlHttp.responseText;
    }

    getData = () => {
        const temp = this.httpGet( 'http://10.183.71.254:8080/NeerMonitor/api/neer/hello' )
        const temp2 = this.httpPost( 'http://10.183.71.254:8080/NeerMonitor/api/neer/getTemp?deviceId=asdf' )
        console.log( temp2 )
    }


    render() {
        return (
            <div className="App">
                <Switch>
                    <Route exact path='/' component={HomeSite}/>
                    <Route path='/login' component={LoginSite}/>
                </Switch>
                {/**
                 <h1>
                 {this.state.currentTemperature} litres
                 </h1>
                 <button onClick={this.getData}>Testing</button>
                 */}
            </div>
        );
    }
}

export default App;
