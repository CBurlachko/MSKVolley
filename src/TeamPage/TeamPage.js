import React, {useState} from "react"
import { Link } from 'react-router-dom';

import styles from "./TeamPage.module.scss";

import matches from '../MIX2022_Matches.json';
import teamLogo1 from '../GeneratedImages/Logo1.png'
import tl1 from '../GeneratedImages/TL1.jpg'
import teamLogo2 from '../GeneratedImages/Logo2.png'
import maleLogo from '../GeneratedImages/PortraitMale.png'
import femaleLogo from '../GeneratedImages/PortraitFemale.png'


// TODO: Отслеживать технические поражения
// TODO: Выделить компонент с историей матчей
// TODO: Написать кастомный хук под изменение списков в выбранной игре
// TODO: Вытащить MVP из общего списка

const TeamPage = ({ teamInfo }) => {
    const [selectedGame, setSelectedGame] = useState(null)
    const [gameLists, setGameLists] = useState(null)

    const gameInfoToggle = (index) => {
        if (gameLists === null) {
            if (selectedGame !== null) {
                if (lastGamesList[selectedGame].teams.firstTeam.id === teamInfo.id) {
                    ownersPlayersList = [...lastGamesList[selectedGame].teams.firstTeam.participants];
                    guestsPlayersList = [...lastGamesList[selectedGame].teams.secondTeam.participants];
                } else {
                    ownersPlayersList = [...lastGamesList[selectedGame].teams.secondTeam.participants];
                    guestsPlayersList = [...lastGamesList[selectedGame].teams.firstTeam.participants];
                }
            }
        } else {

        }
        setSelectedGame(index === selectedGame ? null : index)
    }

    let lastGamesIDs = teamInfo.history.length > 4 ?
        [...teamInfo.history].splice(teamInfo.history.length - 5, 5) :
        [...teamInfo.history]



    const lastGamesList = lastGamesIDs.map(id => matches[id - 1])


    let ownersPlayersList = [];
    let guestsPlayersList = [];

    if (selectedGame !== null){
        if (lastGamesList[selectedGame].teams.firstTeam.id === teamInfo.id){
            ownersPlayersList = [...lastGamesList[selectedGame].teams.firstTeam.participants];
            guestsPlayersList = [...lastGamesList[selectedGame].teams.secondTeam.participants];
        } else {
            ownersPlayersList = [...lastGamesList[selectedGame].teams.secondTeam.participants];
            guestsPlayersList = [...lastGamesList[selectedGame].teams.firstTeam.participants];
        }
    }


    return(
        <div className={styles.TeamPageWrapper}>
            <div className={styles.TeamHeader}>
                <div className={styles.TeamLogo}>
                    <img src={tl1} alt={'logo'}/>
                </div>
                <div className={styles.TeamInfo}>
                    <h1>
                        {teamInfo.name}
                    </h1>
                    <div className={styles.TopPosition}>
                        <h2>{'Топ-место:'}</h2>
                        <h2>{'Первый дивизион, 5 место'}</h2>
                    </div>
                    <div className={styles.ActivePlayers}>
                        <h2>{'Активных участников:'}</h2>
                        <h2>{'12'}</h2>
                    </div>
                </div>
                <div className={styles.TeamStatsWrapper}>
                    <div className={styles.TeamStats}>

                    </div>
                </div>
            </div>
            <div className={styles.GamesHistory}>
                {lastGamesList.map((game, index) => {
                    let [owner, guest] = game.teams.firstTeam.id === teamInfo.id ? ['firstTeam','secondTeam'] : ['secondTeam','firstTeam']
                    return (
                        <div
                            className={`${styles.HistoryCard} ${selectedGame === index ? styles.Active : ''}`}
                            onClick={() => gameInfoToggle(index)}
                        >
                            <div className={styles.ScoreAndLogos}>
                                <div className={styles.Logos}>
                                    <img src={teamLogo1} alt={'logo'}/>
                                    <img src={teamLogo2} alt={'logo'}/>
                                </div>
                                <div className={styles.Score}>
                                    {`${game.scores[owner]} : ${game.scores[guest]}`}
                                </div>
                            </div>
                            <div className={styles.TeamNames}>
                                <p>{`${game.teams[owner].name}`}</p>
                                <p>{'vs.'}</p>
                                <p>{`${game.teams[guest].name}`}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={`${styles.GameInfoWrapper} ${selectedGame !== null ? styles.Active : ''}`}>
                <div className={styles.GameInfo}>
                    <div className={styles.BestPlayersSection}>
                        <div className={styles.PlayerInfo}>
                            <div className={styles.PlayerLogo}>
                                <img src={femaleLogo} />
                            </div>
                            <div className={styles.PlayerName}>
                                {ownersPlayersList[0]}
                            </div>
                        </div>
                    </div>

                    <div className={styles.BestPlayersSection}>
                        <div className={styles.PlayerInfo}>
                            <div className={styles.PlayerLogo}>
                                <img src={maleLogo} />
                            </div>
                            <div className={styles.PlayerName}>
                                {guestsPlayersList[0]}
                            </div>
                        </div>
                    </div>

                    <div
                        className={styles.OtherPlayersSection}
                        style={{ gridTemplateRows: '7fr' }}
                    >
                        {[...ownersPlayersList.slice(1)].map(player => {
                            return (
                                <div className={styles.PlayerInfo}>
                                    <div className={styles.PlayerLogo}>
                                        <img src={maleLogo} />
                                    </div>
                                    <div className={styles.PlayerName}>
                                        {player}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div
                        className={styles.OtherPlayersSection}
                        style={{ gridTemplateRows: '7fr' }}
                    >
                        {[...guestsPlayersList.slice(1)].map(player => {
                            return (
                                <div className={styles.PlayerInfo}>
                                    <div className={styles.PlayerLogo}>
                                        <img src={femaleLogo} />
                                    </div>
                                    <div className={styles.PlayerName}>
                                        {player}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TeamPage;