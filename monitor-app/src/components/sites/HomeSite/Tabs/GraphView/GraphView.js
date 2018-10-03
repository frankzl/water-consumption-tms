import React, { Component } from 'react'
import 'react-circular-progressbar/dist/styles.css';
import CircularProgressbar from 'react-circular-progressbar';

import './GraphView.css'
import SegmentedProgressbar from "./SegmentedProgressbar";

class GraphView extends Component {

    state = {
        percentage: 0,
        liters: 0,
        limit: 128
    }

    statCh = () =>{
        let p = this.state.liters
        p = p+1
        console.log('yo' + p)
        this.setState({
            liters: p+1
        })
    }

    int = setInterval(this.statCh, 500)

    render() {
        return (
            <div className="graph-view">
                <div style={{ width: '200px', height: '200px' }}>
                    <SegmentedProgressbar
                        text={this.state.percentage + ' L'}
                        liters={this.state.liters}
                        limit={this.state.limit} />
                </div>
            </div>
        )
    }
}


export default GraphView
