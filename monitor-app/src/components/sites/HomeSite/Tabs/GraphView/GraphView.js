import React, { Component } from 'react'
import 'react-circular-progressbar/dist/styles.css';

import './GraphView.css'
import SegmentedProgressbar from "./SegmentedProgressbar";
import { connect } from "react-redux";
import * as actionTypes from "../../../../../store/actions";

class GraphView extends Component {

    //int = setInterval(this.statCh, 500)

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

const mapStateToProps = (state)=> {
    return {
        liters: state.totalToday,
        limit: state.limitToday,
        userId: state.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        update: ( id ) => dispatch(actionTypes.getTotal(id, new Date()))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphView)
