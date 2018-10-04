import React, { Component } from 'react'
import GoalView from './GoalView'
import Button from "@material-ui/core/es/Button/Button";
import AddIcon from '@material-ui/icons/Add'
import PopUpAddGoal from "./PopUpAddGoal";
import { withRouter } from "react-router-dom";


class GoalsTab extends Component {

    state = {
        open: false,
        goalList: [
            {
                checked: true,
                text: 'Try to shower under a minute!'
            }, {
                checked: true,
                text: 'Beat your score from yesterday!'
            },
        ]
    }
    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div className="goals-tab" style={{ backgroundColor: '#f0f9fe', height: '100%' }}>
                {this.state.goalList.map(
                    ( goal, idx ) => <GoalView key={idx} checked={goal.checked} text={goal.text}/>
                )}
                <div style={{display: 'flex', justifyContent: 'right'}}>
                    <Button variant="fab" color="primary" onClick={this.handleOpen}>
                        <AddIcon/>
                    </Button>
                </div>
                <PopUpAddGoal open={this.state.open} onClose={this.handleClose}/>
            </div>
        )
    }
}

export default GoalsTab