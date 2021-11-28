import React from 'react'

import {
    AiOutlineUser,
    AiOutlineUserDelete,
    AiOutlineUserSwitch,
    AiOutlineUserAdd,
} from 'react-icons/ai'
import { Container, Row, Col } from 'react-grid-system'

export default class TeamsTab extends React.Component {
    render() {
        return (
            <div className="AdminContentPageStyle container">
                <Container>
                    <Row>
                        <Col md={4}>
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>name</p>
                            <p>Team Lead</p>
                            <p>dept</p>
                        </Col>
                        <Col md={4}>
                            <span className="TeamPicStyle">
                                <AiOutlineUserSwitch />
                            </span>
                            <hr />
                            <p>name</p>
                            <p>Team Lead</p>
                            <p>Sales</p>
                        </Col>
                        <Col md={4}>
                            <span className="TeamPicStyle">
                                <AiOutlineUserAdd />
                            </span>
                            <hr />
                            <p>name</p>
                            <p>New teammate</p>
                            <p>U/X & U/I</p>
                            <p>@pirls</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <span className="TeamPicStyle">
                                <AiOutlineUserDelete />
                            </span>
                            <hr />
                            <p>name</p>
                            <p>position</p>
                            <p>dept</p>
                        </Col>
                        <Col md={4}>
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>name</p>
                            <p>position</p>
                            <p>dept</p>
                        </Col>
                        <Col md={4}>
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>name</p>
                            <p>position</p>
                            <p>dept</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4}>
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>name</p>
                            <p>position</p>
                            <p>dept</p>
                        </Col>
                        <Col md={4}>
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>name</p>
                            <p>position</p>
                            <p>dept</p>
                        </Col>
                        <Col md={4}>
                            <span className="TeamPicStyle">
                                <AiOutlineUser />
                            </span>
                            <hr />
                            <p>name</p>
                            <p>position</p>
                            <p>dept</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
