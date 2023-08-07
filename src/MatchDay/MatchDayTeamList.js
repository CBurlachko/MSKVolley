import React from "react"

import styles from "./MatchDay.module.scss";

import teams from "../MIX2022_Teams.json"
import matches from "../MIX2022_Matches.json"

const MatchDayTeamList = ({ team, games }) => {
    let playersList = []

    for (let game of games) {
        if (matches[game].teams.firstTeam.id === team.id) {
            playersList.length = 0;
            [...matches[game].teams.firstTeam.participants]
                .map((player,index) => playersList.push({name: player, active: true, mvp: matches[game].teams.firstTeam.mvp[index]}))
        }
        if (matches[game].teams.secondTeam.id === team.id) {
            playersList.length = 0;
            [...matches[game].teams.secondTeam.participants]
                .map((player,index) => playersList.push({name: player, active: true, mvp: matches[game].teams.secondTeam.mvp[index]}))
        }
    }

    [...teams[team.id].members]
        .filter((player) => playersList.map(value => (value.name)).indexOf(player.name) === -1)
        .map((player) => playersList.push({name: player.name, active: false, mvp: 0}))

    //console.log('Team ', team.name, playersList)

    return(
        <div className={styles.TeamList}>
            <div className={styles.TeamName}>
                {team.name}
            </div>
            <div className={styles.PlayersList}>
                {playersList.map((player, index) => {
                    return(
                        <div className={`${styles.Player} ${player.active ? styles.isActive : ''}`}>
                            <div>
                                {`${index + 1}. `}
                            </div>
                            <div>
                                {player.name}
                            </div>
                            <div>
                                {player.mvp}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default MatchDayTeamList