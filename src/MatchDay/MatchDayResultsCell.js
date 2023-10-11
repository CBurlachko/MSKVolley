import React from "react";

const MatchDayResultsCell = ({ cell, hl, newHighlightedCell }) => {
    const isWinner = cell.content[0] === '2';
    const isLoser = cell.content[0] === '0' || cell.content[0] === '1';

    let isHighlighted = cell.r === hl.row || cell.c === hl.col;
    let shadow = '';

    if (cell.content === '-') cell.content = '';

    if (cell.r !== hl.row-1 && cell.r !== hl.row && cell.r !== hl.row+1 && cell.c === hl.col-1) shadow = 'inset -10px 0 10px black';    //LeftBorder
    if (cell.r !== hl.row-1 && cell.r !== hl.row && cell.r !== hl.row+1 && cell.c === hl.col+1) shadow = 'inset 10px 0 10px black';     //RightBorder
    if (cell.r === hl.row-1 && cell.c !== hl.col-1 && cell.c !== hl.col && cell.c !== hl.col+1) shadow = 'inset 0 -10px 10px black';    //UpperBorder
    if (cell.r === hl.row+1 && cell.c !== hl.col-1 && cell.c !== hl.col && cell.c !== hl.col+1) shadow = 'inset 0 10px 10px black';     //DownBorder

    if (cell.r === hl.row-1 && cell.c === hl.col-1) shadow = 'inset -10px -10px 10px black';    //UpperLeftBorder
    if (cell.r === hl.row+1 && cell.c === hl.col-1) shadow = 'inset -10px 10px 10px black';     //DownLeftBorder
    if (cell.r === hl.row-1 && cell.c === hl.col+1) shadow = 'inset 10px -10px 10px black';     //UpperRightBorder
    if (cell.r === hl.row+1 && cell.c === hl.col+1) shadow = 'inset 10px 10px 10px black';      //DownRightBorder

    if (hl.col === -5 && hl.row === -5) {
        shadow = '';
        isHighlighted = true;
    }

    return (
        <td 
            className={`${"TeamScore"} 
                        ${isWinner ? "Winner" : null}
                        ${isLoser ? "Loser" : null}
                        ${isHighlighted ? "Highlighted" : null}`}
            style={{boxShadow: `${shadow}`}}
            onMouseEnter={() => newHighlightedCell({row: cell.r, col: cell.c})}
        >
            {cell.content.map(setResults => {
                return (
                    <p>{setResults}</p>
                )
            })}
        </td>
    )
}

export default MatchDayResultsCell