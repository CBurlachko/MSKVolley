import React from "react"
import { Link } from 'react-router-dom';

// import tournamentPages from '../../public/MIX_2022/Main.json'
// import tournamentMatches from '../../public/MIX_2022/Matches.json'

import TournamentTabs from "./ToursTab";

// TODO: Поднять useState выбранного тура на уровень приложения
// TODO: Найти способ динамически подгружать страницы matchPages

let tourPage = [];
let matchPage = [];


const MixTournament = ({ onMatchDayPick, onTeamPick }) => {
    const [activeTab, setActiveTab] = React.useState(10);
    const [tournamentPages, setTournamentPages] = React.useState([]);
    const [tournamentMatches, setTournamentMatches] = React.useState([]);

    React.useEffect(() => {
        fetch('./MIX_2022/Main.json')
            .then(response => response.json())
            .then(result => setTournamentPages(result))
            .catch(error => console.error('Error fetching data:', error));
    }, [])
    React.useEffect(() => {
        fetch('./MIX_2022/Matches.json')
            .then(response => response.json())
            .then(result => setTournamentMatches(result))
            .catch(error => console.error('Error fetching data:', error));
    }, [])

    const getMatchPage = (id) => {
        for (let match of matchPage) {
            if (match.id === id) return match;
        }
        return matchPage[0];
    }

    const tabPicker = (tour) => {
        setActiveTab(tour);
        tourPage = tournamentPages[tour - 1]
        matchPage = tournamentMatches[tour - 1]
    }

    return(
        <div>
            <TournamentTabs 
                value={activeTab} 
                onClickTab={(currentTab) => tabPicker(currentTab)}
            />
            <div className="TournamentTourContent">
                {[...tourPage].map((page, pageIdx) => {
                    return(
                        <div key={pageIdx} className="DivWrapper">
                            <h4>{page.division}</h4>
                            <div className="DivCards">
                                {[...page.groups].map((group, groupIdx) => {
                                    return (
                                        <Link to="/match-day" key={groupIdx} style={{ textDecoration: 'none' }}>
                                            <div 
                                                className="GameCard"
                                                onClick={() => onMatchDayPick(getMatchPage(group.matchID))}
                                            >
                                                <div className="CardHeader">
                                                        {group.name}
                                                </div>
                                                <div className="CardInfo">
                                                    {[...group.teams].map((team, teamIdx) => {
                                                        return (
                                                            <div key={teamIdx} className="CardInfoLine">
                                                                <div className="TeamPosition">
                                                                    {team.pos}
                                                                </div>
                                                                    <div 
                                                                        className="TeamName"
                                                                        onClick={() => onTeamPick(team.id)}
                                                                    >
                                                                    <Link to="/team-page" style={{ textDecoration: 'none' }}>
                                                                        {team.name}
                                                                    </Link>
                                                                </div>
                                                                <div className="GamesScore">
                                                                    {team.score}
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                    }
                                                </div>
                                                <div className="CardStatus">
                                                    {group.status}
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