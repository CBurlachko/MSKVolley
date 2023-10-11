import React from 'react';
import {Link} from "react-router-dom";


const TeamCard = ({ info, onTeamPick}) => {
    return (
        <div className="TeamCard" onClick={() => onTeamPick(info.id)}>
            <Link to="/team-page">
                <img src={info.logo} alt={'logo'}/>
                <div className="TeamName">
                    {info.name}
                </div>
            </Link>
        </div>
    );
};

export default TeamCard;