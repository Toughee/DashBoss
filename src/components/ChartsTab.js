import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts'

import { Container, Row, Col } from 'react-grid-system'

const data = [
    {
        name: 'USA',
        Usertime: 4000,
        Conversionrate: 2400,
    },
    {
        name: 'Canada',
        Usertime: 3000,
        Conversionrate: 1398,
        amt: 2210,
    },
    {
        name: 'India',
        Usertime: 2000,
        Conversionrate: 9800,
        amt: 2290,
    },
    {
        name: 'Germany',
        Usertime: 2780,
        Conversionrate: 3908,
        amt: 2000,
    },
    {
        name: 'UK',
        Usertime: 1890,
        Conversionrate: 4800,
        amt: 2181,
    },
    {
        name: 'Columbia',
        Usertime: 3490,
        Conversionrate: 4300,
        amt: 2100,
    },
]
export default class ChartsTab extends React.Component {
    render() {
        return (
            <div className="AdminContentPageStyle">
                <Container>
                    <h1>Daily data</h1>
                    <Row>
                        <Col className="TestPanel" md={4}>
                            Average daily visitors <br />
                            <strong>(100,441)</strong>
                        </Col>
                        <Col className="TestPanel" md={4}>
                            Average engagement time
                            <br />
                            <strong>(2 minutes)</strong>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="TestPanel" md={4}>
                            Users by date
                            <br />
                            <strong>(2,186,564)</strong>
                        </Col>
                        <Col className="TestPanel" md={4}>
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
                        <Col className="TestPanel" md={4}>
                            <strong>2 minutes</strong> people
                        </Col>
                        <Col className="TestPanel" md={4}>
                            <strong>500,000</strong> new active users by March
                        </Col>

                        <Col className="TestPanel" md={4}>
                            Increase exposure time by{' '}
                            <strong>50 seconds</strong>
                        </Col>

                        <Col className="TestPanel" md={4}>
                            Maintaining a <strong>40%</strong> conversion rate
                            for all products
                        </Col>
                    </Row>
                </Container>

                <h1>User groups</h1>

                <BarChart
                    width={700}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 25,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                        dataKey="Usertime"
                        fill="#8884d8"
                        background={{ fill: '#eee' }}
                    />
                    <Bar dataKey="Conversionrate" fill="#82ca9d" />
                </BarChart>
            </div>
        )
    }
}
