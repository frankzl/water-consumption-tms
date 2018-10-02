import React, { Component } from 'react'

import './HomeSite.css';
import Header from "../Header/Header";
import LoginSite from "../LoginSite/LoginSite";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import GraphView from "./GraphView";


class HomeSite extends Component {
    render() {
        return (

            <div className="home-site">
                <Header/>
                <div>
                    MyGraph here
                </div>
                <Switch>
                    <Route exact path='/' component={GraphView}/>
                    <Route path='/login' component={LoginSite}/>
                </Switch>
            </div>
        )
    }
}

export default HomeSite
