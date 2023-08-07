import React from "react"
import { Link } from 'react-router-dom';

import ContentLoader from "react-content-loader"
import styles from './Teams.module.scss'

import tt from '../MIX2022_TT.json'
import TeamCard from './TeamCard.js'



// TODO: Прикрутить ссылки на реальные картинки, привести их к одному размеру
// TODO: Добавить скелетоны, пока не загружены


const Skeleton = (props) => (
    <ContentLoader
        speed={1}
        width={180}
        height={180}
        viewBox="0 0 180 180"
        backgroundColor="#4e4e69"
        foregroundColor="#383856"
        {...props}
    >
        <rect x="0" y="0" rx="10" ry="10" width="180" height="180" />
    </ContentLoader>
)

function MixTeams({onTeamPick}) {
    const table = [];
    for (let team of tt){
        if (team.games.at(-1) !== 0){
            table.push({
                id: team.id,
                name: team.name,
                div: team.divs.at(-1),
            })
        }
    }

    table.sort((a,b) => {
        if (a.div === "Высший" && b.div !== "Высший") return 1
        if (a.div !== "Высший" && b.div === "Высший") return -1
        if (a.div > b.div) return 1
        if (a.div < b.div) return -1
        return 0
    })

    const divList = ['Высший дивизион', '1-й дивизион', '2-й дивизион',
                        '3-й дивизион', '4-й дивизион', '5-й дивизион']

    return (
        <div className={styles.AllDivsWrapper}>
            {divList.map(divNumber => {return (
                <div className={styles.DivWrapper}>
                    <h4>
                        {divNumber}
                    </h4>
                    <div className={styles.DivCards}>
                        {table
                            .filter(value => value.div === divNumber)
                            .map(team => {
                                return (
                                    <TeamCard teamInfo={team} onTeamPick={onTeamPick}/>
                                )
                        })}
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default MixTeams;