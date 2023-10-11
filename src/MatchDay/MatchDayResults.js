import React from "react"
import { Link } from 'react-router-dom';


import tl1 from '../GeneratedImages/Logo1.png'
import tl2 from '../GeneratedImages/TL1.jpg'
import tl3 from '../GeneratedImages/Logo2.png'

import MatchDayResultsCell from "./MatchDayResultsCell"

const MatchDayResults = ({ teams, results, hl, newHighlightedCell, onTeamPick }) => {

    let tableContent
    if (teams.length === 2) {
        tableContent = [[['',''], results[0][0]], 
                        [results[1][0], ['','']]]
    } else {
        tableContent = [[['',''], results[0][0], results[0][1]],
                        [results[1][0], ['',''], results[1][1]],
                        [results[2][0], results[2][1], ['','']]]
    }
    return (
        <table 
            className={"ResultsTable"}
            onMouseLeave={() => {
                newHighlightedCell({row: -5, col: -5});
            }}    
        >
            {tableContent.map((tableLine, row) => {
                console.log(tableLine)
                return (
                    <tr>
                        <td 
                            className={`${"TeamLogo"} ${["Winner", "Middle", "Loser"][row]}`}
                            onMouseEnter={() => newHighlightedCell({row: row,col: -1})}
                        >
                            <Link to="/team-page" style={{ textDecoration: 'none' }}>
                                <img 
                                    onClick={() => onTeamPick(teams[row].id)}
                                    src={teams[row].logo ? teams[row].logo : [tl1, tl2, tl3][row]} alt={'logo'}
                                />
                            </Link>
                        </td>
                        {tableLine.map((tableCell, col) => {
                            return (
                                <MatchDayResultsCell 
                                    cell={{c: col, r: row, content: tableCell}}
                                    hl={hl}
                                    newHighlightedCell={(e) => newHighlightedCell(e)}
                                />
                            )
                        })}
                    </tr>
                )
            })}
            <tr className={"TableLine"}>
                <td>

                </td>
                {tableContent[0].map((_,col) => {
                    return (
                        <td 
                            className={`${"TeamLogo"} ${["Winner", "Middle", "Loser"][col]}`}
                            onMouseEnter={() => newHighlightedCell({row: teams.length,col: col})}
                        >
                            <Link to="/team-page" style={{ textDecoration: 'none' }}>
                                <img 
                                    onClick={() => onTeamPick(teams[col].id)}
                                    src={teams[col].logo ? teams[col].logo : [tl1, tl2, tl3][col]} alt={'logo'}
                                />
                            </Link>
                        </td>
                    )
                })}
            </tr>
        </table>
    )
}

export default MatchDayResults;