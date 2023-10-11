import React, {useState} from "react"
import { Link } from 'react-router-dom';

import TeamStats from "./TeamStats";
import TeamList from "./TeamList";
import TeamInfo  from "./TeamInfo";

// TODO: Выделение жирным при наведении в инфо и статистике.

const TeamPage = ({ teamInfo, onTeamPick }) => {
    console.log(teamInfo)
    return(
        <div className="TeamPageWrapper">
            <div className="TeamInformation">
                <div className="TeamCard">
                    <div className="TeamLogo">
                        <img src={teamInfo.logo} alt={'logo'}/>
                    </div>
                    <div className="TeamName">
                        <h1>{teamInfo.name}</h1>
                    </div>
                </div>
                <div className="TeamBriefInformation">
                    <TeamInfo teamInfo={teamInfo}/>
                </div>
                <div className="TeamStatistics">
                    <TeamStats teamInfo={teamInfo}/>
                </div>
            </div>
            <div className="TeamList">
                    <TeamList teamInfo={teamInfo}/>
            </div>
        </div>
    )
}

export default TeamPage;