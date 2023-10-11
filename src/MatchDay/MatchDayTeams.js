import React from "react"
import { Link } from 'react-router-dom';

import tl1 from '../GeneratedImages/Logo1.png'
import tl2 from '../GeneratedImages/TL1.jpg'
import tl3 from '../GeneratedImages/Logo2.png'

// TODO: gridTemplateRows прописать напрямую, чтобы вёрстка для двух команд не ломалась

const MatchDayTeams = ({ teams, group, onTeamPick }) => {
    return (
        <div className={"TeamsCard"}>
            <div className={"Group"}>
                {group}
            </div>
            <div className={"TeamLine"}>
            {teams.map((team,index) => {
                return (
                    <Link to="/team-page" style={{ textDecoration: 'none' }}>
                        <div 
                            onClick={() => onTeamPick(team.id)}
                            className={"TeamLineInfo"}
                        >
                            <div className={"TeamLogo"}>
                                <img src={team.logo ? team.logo : [tl1, tl2, tl3][index]} alt={'logo'}/>
                            </div>
                            <div className={`${"TeamName"} ${["Winner", "Midder", "Loser"][index]}`}>
                                {team.name}
                            </div>
                        </div>    
                    </Link>   
                )
            })}
            </div>
        </div>
    )
}

export default MatchDayTeams;