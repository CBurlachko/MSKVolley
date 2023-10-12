import React, { useState, useEffect } from "react"

// import teams from '../../public/MIX_2022/Stats.json'
import TeamCard from './TeamCard.js'


// TODO: Добавить скелетоны, пока не загружены


function MixTeams({onTeamPick}) {

    const [teamsList, setTeams] = React.useState([]);

    useEffect(() => {
        fetch('../MIX_2022/Stats.json')
            .then(response => response.json())
            .then(result => setTeams(result))
            .catch(error => console.error('Error fetching data:', error));
    }, [])

    const divisions = ["Высший дивизион", "1 дивизион", "2 дивизион", "3 дивизион", "4 дивизион", "5 дивизион", "6 дивизион"]
    const teams = teamsList
        .filter(team => team.div.length === 10)
        .map(team => team = ({name: team.name, id: team.id, div: team.div.at(-1), logo: team.logo, points: team.points.at(-1)}))
        .sort((a,b) => b.points - a.points)

    return (
        <div className="TeamListContent">
            {divisions.map(division => {return (
                <div key={division}className="DivWrapper">
                    <h4>
                        {division}
                    </h4>
                    <div className="DivCards">
                        {teams
                            .filter(team => team.div === division)
                            .map(team => {
                                return (
                                    <TeamCard key={team.id} info={team} onTeamPick={onTeamPick}/>
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