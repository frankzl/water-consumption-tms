import React, { Component } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';

import './GraphView.css'
import SegmentedProgressbar from "./SegmentedProgressbar";

class GraphView extends Component {

    state = {
        percentage: 63
    }

    render() {
        return (
            <div className="graph-view">
                <div style={{ width: '200px', height: '200px' }}>
                    <SegmentedProgressbar
                        text={this.state.percentage + ' L'}
                        percentage={this.state.percentage} />
                </div>
            </div>
        )
    }
}


export default GraphView
