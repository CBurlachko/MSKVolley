import React from "react"
import styles from "./MatchDay.module.scss";

import tl1 from '../GeneratedImages/Logo1.png'
import tl2 from '../GeneratedImages/TL1.jpg'
import tl3 from '../GeneratedImages/Logo2.png'


const MatchDayResults = ({ teams }) => {
    let tableContent
    if (teams.length === 2) {
        tableContent = [[['',''], teams[0].score.split(':')], 
                        [teams[1].score.split(':'), ['','']]]
    } else {
        tableContent = [[['',''], teams[0].score.split(' ')[0].split(':'), teams[0].score.split(' ')[1].split(':')],
                        [teams[1].score.split(' ')[0].split(':'), ['',''], teams[1].score.split(' ')[1].split(':')],
                        [teams[2].score.split(' ')[0].split(':'), teams[2].score.split(' ')[1].split(':'), ['','']]]
    }
    return (
        <table className={styles.ResultsTable}>
            {tableContent.map((tableLine, index) => {
                return (
                    <tr>
                        <td className={`${styles.TeamLogo} ${[styles.Winner, styles.Middle, styles.Loser][index]}`}>
                            <img src={[tl1, tl2, tl3][index]} alt={'logo'}/>
                        </td>
                        {tableLine.map(elem => {
                            return (
                                <td className={`${styles.TeamScore} ${elem[0] > elem[1] ? styles.Winner : styles.Loser}`}>
                                    <p>{elem[0]+'-'+elem[1]}</p>
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            <tr className={styles.TableLine}>
                <td>

                </td>
                {tableContent[0].map((_,index) => {
                    return (
                        <td className={`${styles.TeamLogo} ${[styles.Winner, styles.Middle, styles.Loser][index]}`}>
                            <img src={[tl1, tl2, tl3][index]} alt={'logo'}/>
                        </td>
                    )
                })}
            </tr>
        </table>
    )
}

export default MatchDayResults;