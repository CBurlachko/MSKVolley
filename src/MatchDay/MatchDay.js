import React from "react"
import { Link } from 'react-router-dom';

import styles from "./MatchDay.module.scss";


import MatchDayResults from "./MatchDayResults"
import MatchDayTeams from "./MatchDayTeams"
import MatchDayInfo from "./MatchDayInfo"
import MatchDayTeamList from "./MatchDayTeamList"


const MatchDayPage = ({ value }) => {
    if (!value) return(<></>)

    console.log(value, 'Matchday value')

    return(
        <>
            <div className={styles.MainInfo}>
                <MatchDayTeams teams={value.content.teams} group={value.content.group}/>
                <MatchDayResults teams={value.content.teams}/>
                <MatchDayInfo />
            </div>
            
            <div className={styles.TeamLists}>
                {value.content.teams.map((_,index) => {
                    return(
                       <MatchDayTeamList team={value.content.teams[index]} games={[...value.content.games]}/> 
                    )
                })}
            </div>
        </>
    )
}

export default MatchDayPage;