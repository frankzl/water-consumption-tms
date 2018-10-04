import React, { Component } from 'react'
import { connect } from "react-redux";

import ScoreHeader from "../Header/ScoreHeader";
import ScoreView from './ScoreView'
import './ScoreSite.css'

import Aadhi from './../../../assets/img/adhi-resized.png'
import Frank from './../../../assets/img/frank-resized.png'
import Farzan from './../../../assets/img/farzan-resized.png'
import Muthu from './../../../assets/img/muthu-resized.png'
import Eren from './../../../assets/img/eren-resized.png'


class ScoreSite extends Component {

    state = {
        scores: [
            {
                name: "Frank Lu",
                totalPD: 110,
                time: 20,
                picture: Frank
            },
            {
                name: "Aadhithya Sankar",
                totalPD: 90,
                time: 23,
                picture: Aadhi
            },
            {
                name: "Muthuraman Chidambaram",
                totalPD: 120,
                time: 44,
                picture: Muthu
            },
            {
                name: "Cagatay Eren",
                totalPD: 100,
                time: 31,

                picture: Eren
            },
            ,
            {
                name: "Farzan Banihashemi",
                totalPD: 100,
                picture: Farzan,
                time: 43,

            }
        ]
    }


    render() {
        this.state.scores.sort(function(a, b){return a.totalPD - b.totalPD});

        return (
            <div className="home-site">
                <ScoreHeader/>
                <div className="home-site-content-wrapper" style={{ alignItems: 'center' }}>
                    <div className="home-site-content" style={{display: 'flex', flexDirection: 'column', padding: '20px'}}>
                        {
                            this.state.scores.map( ( score ) => {

                                return <ScoreView time={score.time} name={score.name} score={score.totalPD} picture={score.picture}/>
                            } )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => {
    return {}
}

export default connect( mapStateToProps )( ScoreSite )
