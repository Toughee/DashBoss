import React from 'react'

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

import '../App.css'

import { Container, Row, Col } from 'react-grid-system'

const data = [
    {
        name: 'USA',
        UserTime: 40,
        ConversionRate: 24,
    },
    {
        name: 'Canada',
        UserTime: 30,
        ConversionRate: 13,
    },
    {
        name: 'India',
        UserTime: 20,
        ConversionRate: 8,
    },
    {
        name: 'Germany',
        UserTime: 27,
        ConversionRate: 39,
    },
    {
        name: 'UK',
        UserTime: 95,
        ConversionRate: 48,
    },
]

export default class BarData extends React.Component {
    render() {
        return (
            <div>
                <h1>Country statistics</h1>
                <ResponsiveContainer>
                    <Row>
                        <Col className="one column">
                            <BarChart
                                width={1200}
                                height={400}
                                data={data}
                                margin={{
                                    top: 1,
                                    right: 40,
                                    left: 40,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="7 7" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip
                                    wrapperStyle={{
                                        backgroundColor: '#ffffff',
                                        width: 350,
                                        height: 200,
                                    }}
                                />
                                <Legend />

                                <Bar
                                    dataKey="UserTime"
                                    fill="#8884d8"
                                    background={{ fill: '#eee' }}
                                />
                                <Bar
                                    dataKey="ConversionRate"
                                    fill="#82ca9d"
                                    background={{ fill: '#eee' }}
                                />
                            </BarChart>
                        </Col>
                    </Row>
                </ResponsiveContainer>
            </div>
        )
    }
}
