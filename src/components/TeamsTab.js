import React from 'react'

import {
    AiOutlineUser,
    AiOutlineUserDelete,
    AiOutlineUserSwitch,
    AiOutlineUserAdd,
} from 'react-icons/ai'
import { Container, Row, Col } from 'react-grid-system'

import '../App.css'

export default class TeamsTab extends React.Component {
    render() {
        return (
            <div className="AdminContentPageStyle container">
                <Container>
                    <br />
                    <Row>
                        <Col md={4} className="test">
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>Hailey Green</p>
                            <p>Team Lead</p>
                            <p>Design</p>
                            <p className="TeamHandle">@Hgreen</p>
                        </Col>
                        <Col md={4} className="test">
                            <span className="TeamPicStyle">
                                <AiOutlineUserSwitch />
                            </span>
                            <hr />
                            <p>Ayonda Twiqos</p>
                            <p>Team Lead</p>
                            <p>Sales</p>
                            <p className="TeamHandle">@Atwiq</p>
                        </Col>
                        <Col md={4} className="test">
                            <span className="TeamPicStyle">
                                <AiOutlineUserAdd />
                            </span>
                            <hr />
                            <p>George Miguel</p>
                            <p>New teammate</p>
                            <p>Media</p>
                            <p className="TeamHandle">@Gmig</p>
                        </Col>
                    </Row>
                    <br />
                    <br />

                    <Row>
                        <Col md={4} className="test">
                            <span className="TeamPicStyle">
                                <AiOutlineUserDelete />
                            </span>
                            <hr />
                            <p>Jennifer Alford</p>
                            <p>Supervisor</p>
                            <p>Marketing</p>
                            <p className="TeamHandle">@Jalf</p>
                        </Col>
                        <Col md={4} className="test">
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>Greg Matthews</p>
                            <p>Manager</p>
                            <p>DevOps</p>
                            <p className="TeamHandle">@Gmat</p>
                        </Col>
                        <Col md={4} className="test">
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>Shawn James</p>
                            <p>Regional Manager</p>
                            <p>H/R</p>
                            <p className="TeamHandle">@Sjam</p>
                        </Col>
                    </Row>

                    <br />
                    <br />

                    <Row>
                        <Col md={4} className="test">
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>Penelope McGraw</p>
                            <p>Team Lead</p>
                            <p>Server and Security</p>
                            <p className="TeamHandle">@Pgra</p>
                        </Col>
                        <Col md={4} className="test">
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>Talib Johnson</p>
                            <p>Accountant</p>
                            <p>Finance</p>
                            <p className="TeamHandle">@Tjon</p>
                        </Col>
                        <Col md={4} className="test">
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>Norman Daniels</p>
                            <p>Account manager</p>
                            <p>Sales</p>
                            <p className="TeamHandle">@Ndan</p>
                        </Col>
                    </Row>

                    <br />
                </Container>
            </div>
        )
    }
}
