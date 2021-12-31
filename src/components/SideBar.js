import './App.css'

import {
    AiOutlineApartment,
    AiOutlineAreaChart,
    AiFillQuestionCircle,
} from 'react-icons/ai'

import React from 'react'
import TeamsTab from './components/TeamsTab'
import AboutTab from './components/AboutTab'
import ChartsTab from './components/ChartsTab'
import SupportTab from './components/SupportTab'
import ChangelogTab from './components/ChangelogTab'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <header>
                <aside className="UserPanel">
                    <span className="PicStyle">👱</span>
                    <p className="UserNameStyle">@db_user161</p>
                </aside>

                <ul>
                    <BrowserRouter>
                        <li className="TabClassifier">
                            <AiOutlineApartment />
                            Dashboard
                        </li>

                        <hr />
                        <Link to="/TeamsTab">
                            <li>Teams</li>
                        </Link>

                        <Link to="/AboutTab">
                            <li>About</li>
                        </Link>

                        <br />
                        <li className="TabClassifier">
                            <AiOutlineAreaChart />
                            Sales
                        </li>
                        <hr />

                        <Link to="/ChartsTab">
                            <li>Charts & Graphs</li>
                        </Link>
                        <br />

                        <li className="TabClassifier">
                            <AiFillQuestionCircle />
                            Help
                        </li>
                        <hr />

                        <Link to="/SupportTab">
                            <li>Support</li>
                        </Link>
                        <Link to="/ChangelogTab">
                            <li>Changelog</li>
                        </Link>

                        <Routes>
                            <Route path="/TeamsTab" element={<TeamsTab />} />
                            <Route path="/AboutTab" element={<AboutTab />} />
                            <Route path="/ChartsTab" element={<ChartsTab />} />

                            <Route
                                path="/SupportTab"
                                element={<SupportTab />}
                            />
                            <Route
                                path="/ChangelogTab"
                                element={<ChangelogTab />}
                            />
                        </Routes>
                    </BrowserRouter>
                </ul>
            </header>
        </div>
    )
}

export default App
