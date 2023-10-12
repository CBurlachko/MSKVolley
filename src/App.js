import React, {useState, useEffect} from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./scss/app.scss";

// import teamInfo from '../../public/MIX_2022/Stats.json'

import MixTournament from "./TournamentTours/MixTournament";
import MixTeams from "./TournamentTeams/MixTeams";
import MixStats from "./TournamentStats/MixStats";
import NotFound from "./NotFoundPage/NotFoundPage";
import MatchDayPage from "./MatchDay/MatchDay";
import TeamPage from "./TeamPage/TeamPage";


function App() {

    const [matchDay, setMatchDay] = React.useState(null)
    const [teamPage, setTeamPage] = React.useState(null)

    const [teamInfo, setTeamInfo] = React.useState([]);

    useEffect(() => {
        fetch('https://cburlachko.github.io/MSKVolley/MIX_2022/Stats.json')
            .then(response => response.json())
            .then(result => setTeamInfo(result))
            .catch(error => console.error('Error fetching data:', error));
    }, [])


    // TODO: Страница Main - добить вёрстку
    // TODO: Страница 404 - сделать милую вёрстку
    // TODO: Надо ли импортировать компоненты, если они импортированы через страницы?
    // TODO: Footer - раскидать ссылки, сделать вёрстку
    // TODO: SCSS - import файлов, подключение цветовой палитры
    // TODO: *SCSS - цветовая тема

  return (
    <div className="App">
        <div className="Header">
            <div className="TopCap">
                <svg
                    className="Icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 26.458327 26.458416"
                    fill={'white'}
                >
                    <g transform="translate(-94.542678,-113.03653)">
                        <path
                            d="m 95.171585,123.12984 c 1.527273,3.03141 5.181875,4.88823 8.490435,5.05457 1.69029,0.0849 3.81284,-0.92751 5.40873,-0.308 0.73665,0.28601 1.33985,0.96229 1.82268,1.56211 0.33181,0.41232 0.6515,0.86935 0.81879,1.37417 -1.99412,0.78047 -3.65196,1.5718 -5.84897,1.68161 -3.45328,0.17258 -7.124422,-1.5896 -9.323257,-4.1801 -0.667475,-0.78646 -1.386646,-1.68429 -1.682868,-2.68587 h -0.06289 c 0.208198,1.20127 0.91137,2.29761 1.644063,3.24803 2.17959,2.82711 5.673432,4.50091 9.236272,4.61971 0.95395,0.0318 1.96274,-0.0785 2.89304,-0.28889 0.63081,-0.14266 1.26061,-0.41137 1.91431,-0.40288 1.2147,0.0158 2.2611,0.88478 2.50594,2.06844 0.2339,1.13082 -0.69647,1.34444 -1.5901,1.6445 -1.77626,0.59639 -3.61379,0.74724 -5.47162,0.59608 -4.82433,-0.39251 -10.064374,-4.05498 -11.25769,-8.86158 h -0.06289 c 0.835145,4.89192 5.52413,8.63403 10.18852,9.6541 1.18797,0.25985 2.49676,0.37097 3.71064,0.26385 0.75609,-0.0668 1.70953,-0.40351 2.45279,-0.27234 0.79288,0.13991 1.22992,0.8493 1.25785,1.5976 h 0.0629 c 1.26073,-2.90856 1.75305,-5.6747 0.66936,-8.74472 -0.40037,-1.13419 -1.0464,-2.2046 -1.82299,-3.12311 -0.67993,-0.80427 -1.64721,-1.69273 -1.72274,-2.8108 -0.0843,-1.2495 0.73873,-2.34228 1.17828,-3.43543 1.34897,0.47515 2.61009,1.73702 3.49435,2.8108 3.42102,4.15424 3.56303,10.02082 0.46785,14.36632 1.07552,-0.79827 1.74451,-2.15126 2.20488,-3.37296 1.22715,-3.25666 0.97218,-7.08847 -0.76748,-10.11888 -0.42213,-0.73537 -0.90747,-1.42121 -1.46614,-2.06126 -1.13287,-1.29796 -2.66945,-2.67825 -1.22602,-4.42988 0.23623,-0.28677 0.74962,-0.82257 1.16433,-0.78996 0.53313,0.042 1.24174,0.87097 1.59985,1.22276 1.4574,1.43132 2.60279,3.02579 3.34422,4.93402 1.26401,3.2529 1.1803,7.07697 -0.31295,10.24381 -0.57376,1.21688 -1.42255,2.1417 -2.15078,3.24803 0.87539,-0.64973 1.56155,-1.64825 2.13449,-2.56095 2.07425,-3.30413 2.46927,-7.57336 1.23772,-11.24321 -0.4071,-1.21326 -1.00697,-2.38562 -1.73979,-3.43542 -0.41936,-0.60064 -1.11205,-1.17348 -1.34652,-1.87387 -0.23119,-0.69045 0.20811,-1.33413 0.78326,-1.68648 v -0.0625 c -3.27146,0.11518 -6.35783,1.55737 -8.34044,4.18497 -0.5993,0.79421 -1.08866,1.68836 -1.42608,2.62342 -0.33628,0.93181 -0.60162,2.04264 -1.36809,2.73203 -0.99389,0.89396 -2.63279,0.95324 -3.89661,0.95324 0,-5.33578 3.38945,-10.09328 8.61622,-11.6341 1.41068,-0.41587 2.76034,-0.47227 4.21378,-0.42112 v -0.0625 c -4.38503,-0.61762 -8.78761,0.87479 -11.51417,4.49728 -0.63628,0.84531 -1.16973,1.76712 -1.56193,2.74834 -0.68244,1.70728 -1.0191,4.43944 -3.590316,3.96417 -1.441928,-0.26659 -1.272622,-1.25331 -1.01206,-2.40261 0.432446,-1.90722 1.274635,-3.70439 2.486316,-5.24683 2.5109,-3.19632 6.34003,-5.11222 10.41235,-5.24427 0.91546,-0.0297 1.80545,0.18314 2.70437,0.30975 -0.82609,-0.44498 -1.97796,-0.44442 -2.89304,-0.5082 -4.14296,-0.28881 -8.36522,1.65538 -10.989707,4.8181 -0.678229,0.81732 -1.291805,1.72958 -1.754565,2.68587 -0.473641,0.97866 -0.714958,2.72598 -2.098271,2.74435 -0.290876,0.004 -0.544394,-0.10051 -0.817598,-0.18339 m 18.658021,-9.53593 0.0419,0.0209 -0.0419,-0.0209 m 2.03349,1.41583 v 0.0625 h 0.18868 l -0.18868,-0.0625 m -21.131756,10.49366 0.06289,0.0625 -0.06289,-0.0625 m -0.188676,2.56095 0.06289,0.0625 z"
                        />
                    </g>
                </svg>
                <div className="MVL">
                    <p>Московская</p>
                    <p>Волейбольная</p>
                    <p>Лига</p>
                </div>
            </div>
            
            <div className="NavBar">
                <ul className="Menu">
                    <li className="MenuOption">
                        <p>Турниры</p>

                        <ul className="MenuDropDown">
                            <li>
                                <Link to="/mix-tour">{'Микс'}</Link>
                            </li>
                            <li>
                                <Link to="/mix-tour">{'Микс'}</Link>
                            </li>
                            <li>
                                <Link to="/mix-tour">{'Микс'}</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="MenuOption">
                        <p>Команды</p>

                        <ul className="MenuDropDown">
                            <li>
                                <Link to="/mix-teams">{'Микс'}</Link>
                            </li>
                            <li>
                                <Link to="/mix-teams">{'Микс'}</Link>
                            </li>
                            <li>
                                <Link to="/mix-teams">{'Микс'}</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="MenuOption">
                        <p>Статистика</p>

                        <ul className="MenuDropDown">
                            <li>
                                <Link to="/mix-stats">{'Микс'}</Link>
                            </li>
                            <li>
                                <Link to="/mix-stats">{'Микс'}</Link>
                            </li>
                            <li>
                                <Link to="/mix-stats">{'Микс'}</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="MenuOption">
                        <Link to="/mix-stats">
                            <p>Документы</p>
                        </Link>
                    </li>
                </ul>
                
            </div>
        </div>
        <div className="Content">
            <Routes>
                <Route path='/mix-tour' element={
                    <MixTournament
                        onMatchDayPick={(e) => setMatchDay(e)}
                        onTeamPick={(e) => setTeamPage(teamInfo[e])}
                    />}
                />
                <Route path='/mix-teams' element={<MixTeams onTeamPick={(e) => setTeamPage(teamInfo[e])}/>} />
                <Route path='/mix-stats' element={<MixStats onTeamPick={(e) => setTeamPage(teamInfo[e])}/>} />
                <Route path='/match-day' element={
                    <MatchDayPage 
                        matchPage={matchDay}
                        onTeamPick={(e) => setTeamPage(teamInfo[e])}
                    />} 
                />
                <Route path='/team-page' element={
                    <TeamPage 
                        teamInfo={teamPage}
                        onTeamPick={(e) => setTeamPage(teamInfo[e])}
                    />}
                />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
        <div className="Footer">
            <div className="FooterLinks">
                <a href="https://github.com/CBurlachko">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        viewBox="0 0 24 24"
                        fillOpacity="0.5"
                        fill="rgb(40, 55, 127)"
                    >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  );
}

export default App;
