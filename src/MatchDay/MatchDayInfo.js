import React from "react"
import styles from "./MatchDay.module.scss";


const MatchDayInfo = ({  }) => {
    return (
        <table className={styles.InfoTable}>
             <tr>
                <td className={styles.InfoCell}>{'Статус игры:'}</td>
                <td className={styles.CompletenessCell}>{'подтверждены результаты'}</td>
            </tr>
            <tr>
                <td className={styles.InfoCell}>{'Турнир:'}</td>
                <td>{'Микс 2022-2023 Тур 10'}</td>
            </tr>
            <tr>
                <td className={styles.InfoCell}>{'Дата:'}</td>
                <td>{'15-04-2023'}</td>
            </tr>
            <tr>
                <td className={styles.InfoCell}>{'Время:'}</td>
                <td>{'10:00-13:00'}</td>
            </tr>
            <tr>
                <td className={styles.InfoCell}>{'Место:'}</td>
                <td>{'Волгоградский проспект'}</td>
            </tr>
        </table>
    )
}

export default MatchDayInfo;