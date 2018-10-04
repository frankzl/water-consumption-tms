import React, { Component } from 'react'
import 'react-circular-progressbar/dist/styles.css';

import './GraphView.css'
import SegmentedProgressbar from "./SegmentedProgressbar";
import { connect } from "react-redux";
import * as actionTypes from "../../../../../store/actions";

class GraphView extends Component {

    constructor (props){
        super(props)
    }

    render() {
        return (
            <div className="graph-view">
                <div style={{ width: '200px', height: '200px' }}>
                    <SegmentedProgressbar
                        liters={this.props.liters}
                        limit={this.props.limit} />
                </div>
            </div>
        )
    }
}

const dateToString = ( date ) => {
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
const mapStateToProps = (state)=> {
    const date = new Date()
    const yesterday = new Date()
    yesterday.setDate(date.getDate() - 1)
    let limit = state[dateToString(yesterday)]
    if(!limit){
        limit = 1
    }
    return {
        liters: state[dateToString(date)],
        limit: limit,
        userId: state.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update: ( id ) => dispatch(actionTypes.getTotal(id, new Date()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphView)
