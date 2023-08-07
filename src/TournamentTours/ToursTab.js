import React from "react"
import styles from './TourTabs.module.scss'

function TournamentTabs({ value, onClickTab}) {

    const tabs = [1,2,3,4,5,6,7,8,9];

    return(
        <div className={styles.TournamentTabs}>
            <ul>
                {tabs.map(currentTab => {
                    return(
                        <li key={currentTab} onClick={() => onClickTab(currentTab)} className={value === currentTab ? styles.active : ''}>
                            {`${currentTab} тур`}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TournamentTabs;