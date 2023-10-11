import React from "react"
import { Link } from 'react-router-dom';

import ContentLoader from "react-content-loader"

import teams from '../MIX_2022/Stats.json'
import TeamCard from './TeamCard.js'

const divisions = ["Высший дивизион", "1 дивизион", "2 дивизион", "3 дивизион", "4 дивизион", "5 дивизион", "6 дивизион"]
teams = teams
        .filter(team => team.div.length === 10)
        .map(team => team = ({name: team.name, id: team.id, div: team.div.at(-1), logo: team.logo, points: team.points.at(-1)}))
        .sort((a,b) => b.points - a.points)
// TODO: Добавить скелетоны, пока не загружены

const Skeleton = (props) => (
    <ContentLoader
        speed={1}
        width={180}
        height={180}
        viewBox="0 0 180 180"
        backgroundColor="#4e4e69"
        foregroundColor="#383856"
        {...props}
    >
        <rect x="0" y="0" rx="10" ry="10" width="180" height="180" />
    </ContentLoader>
)

function MixTeams({onTeamPick}) {
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