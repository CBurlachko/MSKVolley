if (!matches[matchID].teams.firstTeam.id === teamID && !matches[matchID].teams.secondTeam.id === teamID) {
    return([])
} else {
    let teamPicker = matches[matchID].teams.firstTeam.id === teamID ? 'firstTeam' : 'secondTeam'
    playersList = [...matches[matchID].teams[teamPicker].participants].map((_,index) => {
        return({
            name: matches[matchID].teams[teamPicker].participants[index],
            mvp: matches[matchID].teams[teamPicker].mvp[index],
            active: true
        })
    })
    let withoutMVP = [...playersList].map(elem => (elem.name))
    let inactivePlayersList = [...teams[teamID].members]
        .map(elem => ({
            name: elem.name,
            mvp: 0,
            active: false}))
        .filter(elem => !withoutMVP.includes(elem.name))
    playersList = playersList.concat(inactivePlayersList)
}