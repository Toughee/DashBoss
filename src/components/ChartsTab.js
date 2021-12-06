import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

import { Container, Row, Col } from 'react-grid-system'

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
            <div className="AdminContentPageStyle">
                <Container>
                    <h1>Daily data</h1>
                    <Row>
                        <Col className="PanelLeft1" md={4}>
                            Average daily visitors <br />
                            <strong>(100,441)</strong>
                        </Col>
                        <Col className="PanelRight1" md={4}>
                            Average engagement time
                            <br />
                            <strong>(2 minutes)</strong>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="PanelLeft2" md={4}>
                            Users by date
                            <br />
                            <strong>(2,186,564)</strong>
                        </Col>
                        <Col className="PanelRight2" md={4}>
                            New users by date
                            <br />
                            <strong>(548,651)</strong>
                        </Col>
                    </Row>
                </Container>
                <br />

                <Container>
                    <h1>Company milestones</h1>
                    <Row>
                        <Col className="PanelLeft1" md={4}>
                            <strong>2 minutes</strong> people
                        </Col>
                        <Col className="PanelRight1" md={4}>
                            <strong>500,000</strong> new active users by March
                        </Col>

                        <Col className="PanelLeft2" md={4}>
                            Increase exposure time by{' '}
                            <strong>50 seconds</strong>
                        </Col>

                        <Col className="PanelRight2" md={4}>
                            Maintaining a <strong>40%</strong> conversion rate
                            for all products
                        </Col>
                    </Row>
                </Container>

                <h1>Country statistics</h1>

                <BarChart
                    width={900}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 40,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Test" />
                    <YAxis />
                    <Tooltip margin={15} />
                    <Bar
                        dataKey="UserTime"
                        fill="#8884d8"
                        background={{ fill: '#eee' }}
                    />
                    <Bar dataKey="Conversion" fill="#82ca9d" />
                </BarChart>
            </div>
        )
    }
}
