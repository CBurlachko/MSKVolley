import React from "react";

const lastActualDiv = (div) => div.filter(a => a !== '').at(-1)
const lastActualPos = (pos) => pos.filter(a => a !== '').at(-1)
const lastActualPoints = (points) => points.filter(a => a !== '').at(-1)
const teamActivity = (divArr) => divArr.at(-1) !== '' ? 'Участвует в турнире' : 'Выбыл из турнира'
const teamCondition = (points, div) => {
    if (points.length === 0) return []

    const condition = [0].concat([...points])

    for (let i = condition.length - 1; i > 0; i--) {
        condition[i] -= condition[i - 1]
        if (div[i-1] === 'Высший дивизион') condition[i] /= 3
        if (div[i-1] === '1 дивизион') condition[i] /= 2
        if (condition[i] === 3) condition[i] = 'W'
        if (condition[i] === 2) condition[i] = 'H'
        if (condition[i] === 1) condition[i] = 'L'
        if (condition[i] <= 0) condition[i] = 'T'
    }

    condition.unshift(1)
    return condition.length > 5 ? condition.slice(-5) : condition
}
const TeamInfo = ({teamInfo}) => {
    return(
        <section>
            <header>
                {'Краткая информация'}
            </header>
            <article>
                <table>
                    <tbody>
                        <tr>
                            <th>{'Активность'}</th>
                            <td>{teamActivity(teamInfo.div)}</td>
                        </tr>
                        <tr>
                            <th>{'Дивизион'}</th>
                            <td>{lastActualDiv(teamInfo.div)}</td>
                        </tr>
                        <tr>
                            <th>{'Позиция'}</th>
                            <td>{lastActualPos(teamInfo.pos) + 1}</td>
                        </tr>
                        <tr>
                            <th>{'Очки'}</th>
                            <td>{lastActualPoints(teamInfo.points)}</td>
                        </tr>
                        <tr>
                            <th>{'Форма'}</th>
                            <td>
                                <div className="TeamCondition">
                                    {teamCondition(teamInfo.points, teamInfo.div).map(result => {
                                        let condition
                                        if (result === 'W') condition = 'Win'
                                        if (result === 'H') condition = 'Hold'
                                        if (result === 'L') condition = 'Lose'
                                        if (result === 'T') condition = 'TechLose'
                                        
                                        return (
                                            <svg 
                                                title="This is a mouseover text!"
                                                className={condition}
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g>
                                                    <circle cx="10" cy="10" r="10" />
                                                    <title>{condition}</title>
                                                    <text x="5" y="15" font-family="Verdana" font-size="10" fill="wheat">{result}</text>
                                                </g>
                                            </svg>
                                        )
                                    })}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export default TeamInfo;