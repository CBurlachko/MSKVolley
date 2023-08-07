import React, {useState} from 'react';
import {Link} from "react-router-dom";

import styles from './Table.module.scss'

import tt from '../MIX2022_TT.json';
import TournamentTabs from "../TournamentTours/ToursTab";

// TODO: Проверить корректность подсчёта очков (учитывая х3 для высшего...)
// TODO: Организовать сортировку с тремя опциями и комбинацией
// TODO: Реализовать пагинацию
// TODO: Добавить иконку сортировки
// TODO: Заняться неймингом css
// TODO: Проверить сортировку по Div'ам
// TODO: Вёрстка

const MixStats = ({onTeamPick}) => {
    const [activeTab, setActiveTab] = useState(tt[0].games.length)    // Выбираем активным последний тур
    const [sortedField, setSortedField] = useState({ key: "divs", direction: "descending" })

    const requestSort = key => {
        let direction = 'ascending';
        if (sortedField.key === key && sortedField.direction === 'ascending') {
            direction = 'descending';
        }
        setSortedField({ key, direction });
    }

    const table = [];
    let teamID = 0;
    for (let team of tt){
        if (team.games[activeTab-1] !== 0){
            teamID++;
            table.push({
                id: teamID,
                name: team.name,
                games: team.games[activeTab-1],
                divs: team.divs[activeTab-1],
                sets: team.sets[activeTab-1],
                points: team.points[activeTab-1]
            })
        }
    }

    switch (sortedField.key) {
        case "name":
        case "points":
        case "games":
            table.sort((a, b) => {
                if (a[sortedField.key] > b[sortedField.key]) {
                    return sortedField.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortedField.key] < b[sortedField.key]) {
                    return sortedField.direction === 'ascending' ? 1 : -1;
                }
                return 0
            })
            break
        case "sets":
            table.sort((a, b) => {
                if (a.sets.slice(0, a.sets.indexOf(":")) - a.sets.slice(a.sets.indexOf(":")+1, a.sets.length) >
                    b.sets.slice(0, b.sets.indexOf(":")) - b.sets.slice(b.sets.indexOf(":")+1, b.sets.length)) {
                    return sortedField.direction === 'ascending' ? -1 : 1;
                }
                if (a.sets.slice(0, a.sets.indexOf(":")) - a.sets.slice(a.sets.indexOf(":")+1, a.sets.length) >
                    b.sets.slice(0, b.sets.indexOf(":")) - b.sets.slice(b.sets.indexOf(":")+1, b.sets.length)) {
                    return sortedField.direction === 'ascending' ? 1 : -1;
                }
                return 0
            })
            break
        case "divs":
            table.sort((a, b) => {
                if (a.divs.includes("Высший") && !b.divs.includes("Высший")) {
                    return sortedField.direction === 'ascending' ? 1 : -1;
                }
                if (!a.divs.includes("Высший") && b.divs.includes("Высший")) {
                    return sortedField.direction === 'ascending' ? -1 : 1;
                }
                if (a.divs > b.divs && !a.divs.includes("Высший") && !a.divs.includes("Высший") ) {
                    return sortedField.direction === 'ascending' ? -1 : 1;
                }
                if (a.divs < b.divs && !a.divs.includes("Высший") && !a.divs.includes("Высший") ) {
                    return sortedField.direction === 'ascending' ? 1 : -1;
                }
                return 0
            })
            break
    }


    return (
        <div className={styles.TableTabs}>
            <TournamentTabs value={activeTab} onClickTab={(currentTab) => setActiveTab(currentTab)}/>

            <div className={styles.TourTabContent}>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>
                                <button type="button" onClick={() => requestSort('name')}>
                                    Команда
                                </button>
                            </th>
                            <th>
                                <button type="button" onClick={() => requestSort('divs')}>
                                    Дивизион
                                </button>
                            </th>
                            <th>
                                <button type="button" onClick={() => requestSort('games')}>
                                    Игры
                                </button>
                            </th>
                            <th>
                                <button type="button" onClick={() => requestSort('sets')}>
                                    Партии
                                </button>
                            </th>
                            <th>
                                <button type="button" onClick={() => requestSort('points')}>
                                    Очки
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((team, index) => {
                            return (
                                <tr key={index}>
                                    <td className={styles.Position}>
                                        <p>{index + 1}</p>
                                    </td>
                                    <td onClick={() => onTeamPick(team.id)} className={styles.Team}>
                                        <Link to="/team-page">
                                            <p>{team.name}</p>
                                        </Link>
                                    </td>
                                    <td className={styles.Division}>
                                        <p>{team.divs}</p>
                                    </td>
                                    <td className={styles.Games}>
                                        <p>{team.games}</p>
                                    </td>
                                    <td className={styles.Sets}>
                                        <p>{team.sets}</p>
                                    </td>
                                    <td className={styles.Score}>
                                        <p>{team.points}</p>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MixStats;