import React from "react"

const winCounter = (win, lose, games) => {
    let result = 0;
    const winCount = [0].concat([...win]);
    const loseCount = [0].concat([...lose]);
    const gamesCount = [0].concat([...games]);
    let totalGames = games.filter(a => a !== '').at(-1)

    for (let i = games.length - 1; i > 0; i--) {
        if (gamesCount[i] === '') continue
        winCount[i] -= winCount[i-1]
        loseCount[i] -= loseCount[i-1]
        gamesCount[i] -= gamesCount[i-1]

        if (gamesCount[i] === 2) {
            if (winCount[i] === 4) result += 2
            if (winCount[i] === 3) result += 1
            if (winCount[i] === 2 && loseCount[i] === 3) result += 1
        }
        if (gamesCount[i] === 1 && winCount[i] === 2) result += 1
    }
    winCount.shift()
    loseCount.shift()
    gamesCount.shift()

    console.log(winCount,loseCount,gamesCount)
    
    return ([result, totalGames-result])
}

const winToLose = (win, lose, games) => {
    for (let i = games.length - 1; i > 0; i--) if (games[i] !== '') return `${win[i]}/${lose[i]}`    
}

const topDiv = (div) => {
    let topDivPos = '7 дивизион'
    for (let i = div.length - 1; i > 0; i--) {
        if (div[i] === '') continue
        if (div[i] === 'Высший дивизион') return div[i]
        if (div[i] < topDivPos) topDivPos = div[i]
    }
    return topDivPos
}


const TeamStats = ({ teamInfo }) => {
    const [totalWinCount, totalLoseCount] = winCounter(teamInfo.win, teamInfo.lose, teamInfo.games)
    const setsStats = winToLose(teamInfo.win, teamInfo.lose, teamInfo.games)
    const topDivPos = topDiv(teamInfo.div);

    return(
        <section>
            <header>
                {'Статистика'}
            </header>
            <article>
                <table>
                    <tbody>
                        <tr>
                            <th>{'Побед'}</th>
                            <td>{totalWinCount}</td>
                        </tr>
                        <tr>
                            <th>{'Поражений'}</th>
                            <td>{totalLoseCount}</td>
                        </tr>
                        <tr>
                            <th>{'Процент побед'}</th>
                            <td>{`${parseInt(totalWinCount/(totalWinCount+totalLoseCount)*100)}%`}</td>
                        </tr>
                        <tr>
                            <th>{'Партии +/-'}</th>
                            <td>{setsStats}</td>
                        </tr>
                        <tr>
                            <th>{'Высшая позиция'}</th>
                            <td>{topDivPos}</td>
                        </tr>
                    </tbody>
                </table>
            </article>
        </section>
    )
}

export default TeamStats;