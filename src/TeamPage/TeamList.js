import React from "react";

const TeamList = ({ teamInfo }) => {

    const players = teamInfo.players.sort((a, b) => {
        if (a.games !== 0 && b.games !== 0) return a.mvp < b.mvp ? 1 : -1
        if (a.games === 0) return 1
        if (b.games === 0) return -1
    });


    return (
        <div className="PlayersList">
            {players
                .map(player => {
                    return (
                        <div className={`PlayerCard ${player.games === 0 ? 'Inactive' : ''}`}>
                            <img src={player.logo} alt={'logo'}/>
                            <div className="PlayerInfo">
                                <h4>{player.name.split(' ').slice(0,-1).join(' ')}</h4>
                                <ul>
                                    <li>
                                        <span>{player.games}</span>
                                        <span>{'Игры'}</span>
                                    </li>
                                    <li>
                                        <span>{player.mvp}</span>
                                        <span>{'MVP'}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
            })}
        </div>
    )
}

export default TeamList;