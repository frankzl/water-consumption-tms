import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css';
import LoginSite from "./components/sites/LoginSite/LoginSite";

class App extends Component {

    state = {
        currentTemperature: 0
    }

    getData = () => {
        axios( {
            method: 'get',
            url: '10.183.71.254:8080/NeerMonitor/api/neer/hello',
        } )
            .then( function ( response ) {
                console.log(response)
            } ).catch(err => {
                console.log(err)
        });
    }


    render() {
        return (
            <div className="App">

                <LoginSite/>

                <h1>
                    {this.state.currentTemperature} litres
                </h1>
                <button onClick={this.getData}>Testing</button>
            </div>
        );
    }
}

export default App;
