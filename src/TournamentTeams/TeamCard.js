import React from 'react';
import {Link} from "react-router-dom";

import styles from "./Teams.module.scss";

import teamLogo from "../GeneratedImages/Logo1.png";

const TeamCard = ({ teamInfo, onTeamPick}) => {
    return (
        <div className={styles.TeamCard} onClick={() => onTeamPick(teamInfo.id)}>
            <Link to="/team-page">
                <img src={teamLogo} alt={'logo'}/>
                <div className={styles.TeamName}>
                    {teamInfo.name}
                </div>
            </Link>
        </div>
    );
};

export default TeamCard;