import React from 'react'


const scoreView = ( props ) => {
    return ( <div className="score-view">
            <img src={props.picture} className="score-profile"></img>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start'
            }}>
                <div className="score-profile-name">{props.name}</div>
                <div className="score-profile-date">{props.time} minutes ago</div>
            </div>
            <div className="score">{props.score}</div>
        </div>
    )
}

export default scoreView
