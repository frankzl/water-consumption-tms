import React, { Component } from 'react'

import './HomeSite.css';
import Header from "../Header/Header";
import LoginSite from "../LoginSite/LoginSite";
import Route from "react-router-dom/es/Route";
import Switch from "react-router-dom/es/Switch";
import GraphView from "./Tabs/GraphView/GraphView";
import TabContainer from "./Tabs/TabContainer";


class HomeSite extends Component {
    render() {
        return (

            <div className="home-site">
                <Header/>
                <div className="home-site-content-wrapper">
                    <div className="home-site-content">
                        <Switch>
                            <Route exact path='/' component={GraphView}/>
                            <Route path='/login' component={LoginSite}/>
                        </Switch>
                        <TabContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeSite
