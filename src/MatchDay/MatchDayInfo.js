import React from "react"

// TODO: Переписать табличку на article

const MatchDayInfo = ({ info }) => {
    return (
        <table className="InfoTable">
             <tr>
                <td className="InfoCell">{'Статус игры:'}</td>
                <td className="CompletenessCell">{info.status}</td>
            </tr>
            <tr>
                <td className="InfoCell">{'Турнир:'}</td>
                <td>{info.tournament}</td>
            </tr>
            <tr>
                <td className="InfoCell">{'Дата:'}</td>
                <td>{info.date}</td>
            </tr>
            <tr>
                <td className="InfoCell">{'Время:'}</td>
                <td>{info.time}</td>
            </tr>
            <tr>
                <td className="InfoCell">{'Место:'}</td>
                <td>{info.place}</td>
            </tr>
        </table>
    )
}

export default MatchDayInfo;