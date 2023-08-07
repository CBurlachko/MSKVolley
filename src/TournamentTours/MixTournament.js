import React from "react"
import styles from './Tournament.module.scss'
import { Link } from 'react-router-dom';
import md from '../MIX2022_MatchDays.json';
import TournamentTabs from "./ToursTab";

// TODO: Исправить верстку в случае группы из двух команд + в этом случае выигравшая команда выше (5 тур С5 и D5)
// TODO: Вытащить логику из вёрстки
// TODO: Поднять useState выбранного тура на уровень приложения

const MixTournament = ({ onMatchDayPick, onTeamPick }) => {
    const [activeTab, setActiveTab] = React.useState(9);

    function getTourPage (tour, matchDayDB){
        const tourPage = []

        for (let matchDay of matchDayDB){
            if (matchDay.tour === tour){
                const mdCard = {
                    group: matchDay.group,
                    status: matchDay.status,
                    teams: [],
                    games: [...matchDay.games]
                }

                for (let i = 0; i < matchDay.teams.length; i++) {
                    if (matchDay.teams.length === 3) {
                        mdCard.teams.push({
                            pos: i+1,
                            id: matchDay.teams[i].id,
                            name: matchDay.teams[i].name,
                            score: matchDay.results[i][0] + " " + matchDay.results[i][1]
                        })
                    } else {
                        mdCard.teams.push({
                            pos: i+1,
                            id: matchDay.teams[i].id,
                            name: matchDay.teams[i].name,
                            score: matchDay.results[i][0]
                        })
                    }
                }

                let mdCardDiv = mdCard.group.replace(/\D/ig, "")
                mdCardDiv = mdCardDiv === "" ? 0 : Number(mdCardDiv)

                if (tourPage.length < mdCardDiv + 1){
                    tourPage.push({
                        div: mdCardDiv === 0 ? "Высший дивизион" : mdCardDiv + "-й дивизион",
                        content: []
                    })
                }
                tourPage[mdCardDiv].content.push(mdCard)

            }
        }

        while (tourPage.at(-1).content.length === 0) tourPage.pop()

        return tourPage
    }

    const tourPage = getTourPage(activeTab, md)

    return(
        <div>
            <TournamentTabs value={activeTab} onClickTab={(currentTab) => setActiveTab(currentTab)}/>

            <div className={styles.AllDivsWrapper}>
                {[...tourPage].map(elem => {
                    return(
                        <div className={styles.DivWrapper}>
                            <h4>{elem.div}</h4>
                            <div className={styles.DivCards}>
                                {[...elem.content].map(content => {
                                    return (
                                        <Link to="/match-day" style={{ textDecoration: 'none' }}>
                                            <div 
                                                className={styles.GameCard}
                                                onClick={() => onMatchDayPick({tour: activeTab, content: content})} 
                                            >
                                                <div className={styles.CardHeader} >
                                                        {content.group}
                                                </div>
                                                <div className={styles.CardInfo}>
                                                    {[...content.teams].map(team => {
                                                        return (
                                                            <div className={styles.CardInfoLine}>
                                                                <div className={styles.TeamPosition}>
                                                                    {team.pos}
                                                                </div>
                                                                    <div 
                                                                        className={styles.TeamName}
                                                                        onClick={() => onTeamPick(team.id)}
                                                                    >
                                                                    <Link to="/team-page" style={{ textDecoration: 'none' }}>
                                                                        {team.name}
                                                                    </Link>
                                                                </div>
                                                                <div className={styles.GamesScore}>
                                                                    {team.score}
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    }
                                                </div>
                                                <div className={styles.CardStatus}>
                                                    {elem.status}
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })
                                }
                            </div>
                        </div>
                    )})}
            </div>
        </div>
    )
}

export default MixTournament;