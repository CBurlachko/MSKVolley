import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

// import stats from '../MIX_2022/Stats.json'

import TournamentTabs from "../TournamentTours/ToursTab";

// TODO: Проверить корректность подсчёта очков (учитывая х3 для высшего...)
// TODO: Организовать сортировку с тремя опциями и комбинацией
// TODO: Реализовать пагинацию
// TODO: Добавить иконку сортировки
// TODO: Заняться неймингом css
// TODO: Проверить сортировку по Div'ам


const MixStats = ({onTeamPick}) => {
    const [activeTab, setActiveTab] = useState(10)
    const [sortedField, setSortedField] = useState({ key: "position", direction: "ascending" })
    const [stats, setStats] = React.useState([]);

    useEffect(() => {
        fetch('../MIX_2022/Stats.json')
            .then(response => response.json())
            .then(result => setStats(result))
            .catch(error => console.error('Error fetching data:', error));
    }, [])

    console.log(stats, 'Update')

    function createStatsTab(tour) {
        const statsTab = []
        stats
            .filter(team => team.div.length >= tour)
            .filter(team => team.div[tour - 1] !== "")
            .map(team => {
                statsTab.push({
                    name: team.name,
                    id: team.id,
                    div: team.div[tour - 1],
                    win: team.win[tour - 1],
                    lose: team.lose[tour - 1],
                    games: team.games[tour - 1],
                    points: team.points[tour - 1],
                    pos: team.pos[tour - 1],
                })
            })
        return statsTab
    }

    let statsTab = createStatsTab(10)

    const requestSort = key => {
        let direction = 'ascending';
        if (sortedField.key === key && sortedField.direction === 'ascending') {
            direction = 'descending';
        }
        setSortedField({ key, direction });
    }
    const tabPicker = (tour) => {
        setActiveTab(tour)
        statsTab = createStatsTab(tour)
    }
    


    switch (sortedField.key) {
        case "name":
        case "points":
        case "games":
            statsTab.sort((a, b) => {
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
            statsTab.sort((a, b) => {
                if ((a.win - a.lose) / a.games === (b.win - b.lose) / b.games) {
                    if (a.games > b.games) {
                        return sortedField.direction === 'ascending' ? -1 : 1;
                    } else {
                        return sortedField.direction === 'ascending' ? 1 : -1;
                    }
                }
                if ((a.win - a.lose) / a.games > (b.win - b.lose) / b.games) {
                    return sortedField.direction === 'ascending' ? -1 : 1;
                }
                if ((a.win - a.lose) / a.games < (b.win - b.lose) / b.games) {
                    return sortedField.direction === 'ascending' ? 1 : -1;
                }
                return 0
            })
                break
        case "div":
        default:
            statsTab.sort((a, b) => {
                if (a.div === "Высший дивизион" && b.div !== "Высший дивизион") {
                    return sortedField.direction === 'ascending' ? -1 : 1;
                }
                if (a.div !== "Высший дивизион" && b.div === "Высший дивизион") {
                    return sortedField.direction === 'ascending' ? 1 : -1;
                }
                if (a.div < b.div) {
                    return sortedField.direction === 'ascending' ? -1 : 1;
                }
                if (a.div > b.div) {
                    return sortedField.direction === 'ascending' ? 1 : -1;
                }
                return 0
            })
            break
    }


    return (
        <div className="TableTabs">
            <TournamentTabs value={activeTab} onClickTab={(currentTab) => tabPicker(currentTab)}/>

            <div className="TourTabContent">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>
                                <button type="button" onClick={() => requestSort('name')}>
                                    Команда
                                </button>
                            </th>
                            <th>
                                <button type="button" onClick={() => requestSort('div')}>
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
                        {statsTab.map((team, index) => {
                            return (
                                <tr key={index}>
                                    <td className="Position">
                                        <p>{index + 1}</p>
                                    </td>
                                    <td onClick={() => onTeamPick(team.id)} className="Team">
                                        <Link to="/team-page">
                                            <p>{team.name}</p>
                                        </Link>
                                    </td>
                                    <td className="Division">
                                        <p>{team.div}</p>
                                    </td>
                                    <td className="Games">
                                        <p>{team.games}</p>
                                    </td>
                                    <td className="Sets">
                                        <p>{team.win+'-'+team.lose}</p>
                                    </td>
                                    <td className="Score">
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