import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from 'recharts'

import { Container, Row, Col } from 'react-grid-system'

import '../App.css'

const data = [
    {
        name: 'USA',
        UserTime: 40,
        Conversion: 24,
    },
    {
        name: 'Canada',
        UserTime: 30,
        Conversion: 13,
    },
    {
        name: 'India',
        UserTime: 20,
        Conversion: 8,
    },
    {
        name: 'Germany',
        UserTime: 27,
        Conversion: 39,
    },
    {
        name: 'UK',
        UserTime: 70,
        Conversion: 48,
    },
]
export default class ChartsTab extends React.Component {
    render() {
        return (
            <div className="ChartsPageStyle">
                <Container>
                    <h1>Daily data</h1>
                    <Row>
                        <Col className="PanelLeft1 two columns">
                            <p>Average daily visitors <br />
                            <strong>(100,441)</strong></p>
                        </Col>
                        <Col className="PanelRight1 two columns">
                            <p>Average engagement time
                            <br />
                            <strong>(2 minutes)</strong></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="PanelLeft2 two columns">
                            <p>Users by date
                            <br />
                            <strong>(2,186,564)</strong></p>
                        </Col>
                        <Col className="PanelRight2 two columns">
                            <p>New users by date
                            <br />
                            <strong>(548,651)</strong></p>
                        </Col>
                    </Row>
                </Container>
                <br />

                <Container>
                    <h1>Company milestones</h1>
                    <Row className="DataMetricsStyle">
                        <Col className="PanelLeft1 two columns">
                            <p><strong>(2 minute use time)</strong> average for each user</p>
                        </Col>
                        <Col className="PanelRight1 two columns">
                            <p><strong>(750,000)</strong> new active users by March</p>
                        </Col>

                        <Col className="PanelLeft2 two columns">
                            <p>Increase exposure time by{' '}
                            <strong>(50 seconds)</strong></p>
                        </Col>

                        <Col className="PanelRight2 two columns">
                            <p>Maintaining a <strong>(40%)</strong> conversion rate
                            for all products</p>
                        </Col>
                    </Row>
                </Container>

                <h1>Country statistics</h1>
                <Container>
                <Row>
                <Col className="one column">
                <BarChart
                    width={1000}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 40,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="TopCountries" />
                    <YAxis />
                    <Tooltip margin={15} />
 
                    
                    <Bar
                        dataKey="UserTime"
                        fill="#8884d8"
                        background={{ fill: '#eee' }}
                    />
                    <Bar 
                        dataKey="Conversion" 
                        fill="#82ca9d" 

                        />
                </BarChart>
                </Col>
                </Row>
                </Container>
            </div>
        )
    }
}
