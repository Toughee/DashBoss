import './App.css'

import {
    AiOutlineApartment,
    AiOutlineAreaChart,
    AiFillQuestionCircle,
    AiFillRead,
    AiOutlineUser,
    // AiFillEdit,
} from 'react-icons/ai'

import { BsFillPinMapFill } from 'react-icons/bs'

import { FaLifeRing } from 'react-icons/fa'

import React from 'react'
import HomePage from './components/HomePage'
import TeamsTab from './components/TeamsTab'
import AboutTab from './components/AboutTab'
import ChartsTab from './components/ChartsTab'
import MapsDataTab from './components/MapsDataTab'

import SupportTab from './components/SupportTab'
import ChangelogTab from './components/ChangelogTab'

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header>
                    <BrowserRouter>
                        <details>
                            <summary>Menu</summary>
                            {/*
                        <p class="DashTab"><AiOutlineUser /> username</p>
                        */}
                            <Link to="/HomePage">
                                <p class="DashTab">
                                    <BsFillPinMapFill /> Home
                                </p>
                            </Link>
                            <Link to="/AboutTab">
                                <p class="DashTab">
                                    <AiFillQuestionCircle /> About
                                </p>
                            </Link>
                            <Link to="/TeamsTab">
                                <p class="DashTab">
                                    <AiOutlineApartment /> Teammates
                                </p>
                            </Link>

                            <Link to="/ChartsTab">
                                <p class="DashTab">
                                    <AiOutlineAreaChart /> Charts
                                </p>
                            </Link>
                            {/*
                        <Link to="/MapsDataTab">
                        <p class="DashTab"> Maps</p>
                        </Link>*/}
                            <Link to="/SupportTab">
                                <p class="DashTab">
                                    <FaLifeRing /> Support
                                </p>
                            </Link>
                            <Link to="/ChangelogTab">
                                <p class="DashTab">
                                    <AiFillRead /> Changelog
                                </p>
                            </Link>
                        </details>
                        <br />
                        <Routes>
                            <Route path="/HomePage" element={<HomePage />} />
                            <Route path="/TeamsTab" element={<TeamsTab />} />
                            <Route path="/AboutTab" element={<AboutTab />} />
                            <Route path="/ChartsTab" element={<ChartsTab />} />

                            <Route
                                path="/MapsDataTab"
                                element={<MapsDataTab />}
                            />

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
                </header>
            </div>
        )
    }
}
