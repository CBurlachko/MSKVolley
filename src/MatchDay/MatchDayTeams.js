import React from "react"
import styles from "./MatchDay.module.scss";

import tl1 from '../GeneratedImages/Logo1.png'
import tl2 from '../GeneratedImages/TL1.jpg'
import tl3 from '../GeneratedImages/Logo2.png'

const MatchDayTeams = ({ teams, group }) => {

    console.log('GROUP', group)
    return (
        <div className={styles.TeamsCard}>
            <div className={styles.Group}>
                {group}
            </div>
            <div className={styles.TeamLine}>
            {teams.map((team,index) => {
                return (
                    <div className={styles.TeamLineInfo}>
                        <div className={styles.TeamLogo}>
                            <img src={tl1} alt={'logo'}/ >
                        </div>
                        <div className={`${styles.TeamName} ${[styles.Winner, styles.Midder, styles.Loser][index]}`}>
                            {team.name}
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default MatchDayTeams;