import React, { Component } from 'react'
import TipView from "./TipView";
import "./TipsTab.css"

class TipsTab extends Component {

    state = {
        tipList: [
            {
                type: 'shower',
                text: 'Reduce your shower time!'
            },
            {
                type: 'washing',
                text: 'Try using the washing maschine '
            },
            {
                type: 'dish',
                text: 'Thought of using a dish washer?'
            }
        ]
    }

    render() {
        const tips = this.state.tipList.map(
            (tip, idx) => {
                return <TipView key={idx} text={tip.text} type={tip.type}/>
            }
        )
        return (
            <div className="tips-tab">
                {tips}
            </div>
        )
    }
}

export default TipsTab
