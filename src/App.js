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
    state = {
        value: 'testusername',
    }

    render() {
        return (
            <div className="App">
                <header>
                    <BrowserRouter>
                        <ul>
                            <Link to="/HomePage">
                                <li>
                                    <span className="PicStyle exp">
                                        <AiOutlineUser />@
                                    </span>

                                    <span className="exp">
                                        {this.state.value}
                                    </span>

                                    {/* 
                                    future edit option for username
                                    <button className="editButton">
                                    <AiFillEdit />
                                </button> */}
                                </li>
                            </Link>
                            <Link to="/TeamsTab">
                                <li>
                                    <AiOutlineApartment />
                                    Teams
                                </li>
                            </Link>

                            <Link to="/AboutTab">
                                <li>
                                    <AiFillQuestionCircle />
                                    About
                                </li>
                            </Link>

                            <Link to="/ChartsTab">
                                <li>
                                    <AiOutlineAreaChart />
                                    Charts & Graphs
                                </li>
                            </Link>

                            <Link to="/MapsDataTab">
                                <li>
                                    <BsFillPinMapFill />
                                    Maps data
                                </li>
                            </Link>

                            <Link to="/SupportTab">
                                <li>
                                    <FaLifeRing />
                                    Support
                                </li>
                            </Link>
                            <Link to="/ChangelogTab">
                                <li>
                                    <AiFillRead />
                                    Changelog
                                </li>
                            </Link>
                        </ul>
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
