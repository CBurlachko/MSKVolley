import React from "react"

function TournamentTabs({ value, onClickTab}) {

    const tabs = [1,2,3,4,5,6,7,8,9,10];

    return(
        <div className="TournamentTabs">
            <ul>
                {tabs.map((currentTab, i) => {
                    return(
                        <li key={i} onClick={() => onClickTab(currentTab)} className={value === currentTab ? "active" : ''}>
                            {`${currentTab} тур`}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TournamentTabs;