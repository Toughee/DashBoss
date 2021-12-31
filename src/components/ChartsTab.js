import React from 'react'

import BarData from './BarData'

import { Container, Row, Col } from 'react-grid-system'

import '../App.css'

export default class ChartsTab extends React.Component {
    render() {
        return (
            <div className="ChartsPageStyle">
                <Container>
                    <h1>Daily data</h1>
                    <Row>
                        <Col className="PanelLeft1 two columns">
                            <p>
                                Average daily visitors <br />
                                <strong>(100,441)</strong>
                            </p>
                        </Col>
                        <Col className="PanelRight1 two columns">
                            <p>
                                Average engagement time
                                <br />
                                <strong>(2 minutes)</strong>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="PanelLeft2 two columns">
                            <p>
                                Users by date
                                <br />
                                <strong>(2,186,564)</strong>
                            </p>
                        </Col>
                        <Col className="PanelRight2 two columns">
                            <p>
                                New users by date
                                <br />
                                <strong>(548,651)</strong>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <br />

                <Container>
                    <h1>Company milestones</h1>
                    <Row className="DataMetricsStyle">
                        <Col className="PanelLeft1 two columns">
                            <p>
                                <strong>(2 minute use time)</strong> average for
                                each user
                            </p>
                        </Col>
                        <Col className="PanelRight1 two columns">
                            <p>
                                <strong>(750,000)</strong> new active users by
                                March
                            </p>
                        </Col>

                        <Col className="PanelLeft2 two columns">
                            <p>
                                Increase exposure time by{' '}
                                <strong>(50 seconds)</strong>
                            </p>
                        </Col>

                        <Col className="PanelRight2 two columns">
                            <p>
                                Maintaining a <strong>(40%)</strong> conversion
                                rate for all products
                            </p>
                        </Col>
                    </Row>
                </Container>

                <BarData />
            </div>
        )
    }
}
