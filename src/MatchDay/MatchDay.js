import React from "react"

import MatchDayResults from "./MatchDayResults"
import MatchDayTeams from "./MatchDayTeams"
import MatchDayInfo from "./MatchDayInfo"
import MatchDayTeamList from "./MatchDayTeamList"


const MatchDayPage = ({ matchPage, onTeamPick }) => {
    const [highlightedCell, setHighlightedCell] = React.useState({row: -5, col: -5})
    const [teamListSpoilers, setTeamListspoilers] = React.useState(new Array(matchPage.teams.length).fill(true));

    if (!matchPage) return(<></>)
    return(
        <>
            <div className="MainInfo">
                <MatchDayTeams 
                    teams={matchPage.teams} 
                    group={matchPage.group}
                    onTeamPick = {onTeamPick}
                />
                <MatchDayResults 
                    teams={matchPage.teams}
                    results={matchPage.results}
                    hl={highlightedCell}
                    newHighlightedCell={(e) => setHighlightedCell(e)}
                    onTeamPick = {onTeamPick}
                />
                <MatchDayInfo 
                    info = {{
                        status: matchPage.status,
                        tournament: matchPage.tournament,
                        date: matchPage.date,
                        time: matchPage.time,
                        place: matchPage.place,
                    }}
                />
            </div>
            
            <div className="TeamLists" >
                {matchPage.teams.map((_,index) => {
                    return(
                        <MatchDayTeamList 
                            team={matchPage.teams[index]}
                            hidden={teamListSpoilers[index]}
                            toggleSpoiler={(e) => setTeamListspoilers(teamListSpoilers.map((el, toggleIndex) => toggleIndex === index ? !el : el))}
                            onTeamPick = {onTeamPick}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default MatchDayPage;