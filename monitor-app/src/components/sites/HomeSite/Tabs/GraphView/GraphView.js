import React, { Component } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';

import './GraphView.css'

class GraphView extends Component {

    state = {
        percentage: 63
    }

    render() {
        return (
            <div className="graph-view">
                <CircularProgressbar
                    text={this.state.percentage + 'L'}
                    percentage={this.state.percentage}
                />
            </div>
        )
    }
}


export default GraphView
