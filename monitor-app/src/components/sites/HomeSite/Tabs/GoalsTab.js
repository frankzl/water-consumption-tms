import React, { Component } from 'react'
import GoalView from './GoalView'

class GoalsTab extends Component {

    state = {
        goalList: [
            {
                checked: true,
                text: 'Try to shower under a minute!'
            },{
                checked: true,
                text: 'Beat your score from yesterday!'
            },
        ]
    }

    render() {
        return (
            <div className="goals-tab" style={{backgroundColor: '#f0f9fe' }}>
                {this.state.goalList.map(
                    (goal, idx) => <GoalView key={idx} checked={goal.checked} text={goal.text}/>
                )}
            </div>
        )
    }
}

export default GoalsTab