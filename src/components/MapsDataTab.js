import React from 'react'

import '../index.css'
import '../App.css'

import { Container, Row, Col } from 'react-grid-system'

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
} from 'react-simple-maps'

const geoUrl =
    'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json'

const datapoints = [
    {
        markerOffset: -15,
        name: 'London: 10% conversion rate',
        coordinates: [-0.127758, 51.507351],
    },
    {
        markerOffset: -15,
        name: 'Shanghai: $5mln sales',
        coordinates: [121.473701, 31.230391],
    },
    {
        markerOffset: -15,
        name: 'Austin: 2% engagement increase',
        coordinates: [-97.7466, 30.26498],
    },
    {
        markerOffset: -15,
        name: 'Madrid: 500,000 users',
        coordinates: [-3.713294, 40.416734],
    },
    {
        markerOffset: -15,
        name: 'Bogota: 1 million users',
        coordinates: [-74.118828, 4.665819],
    },
    {
        markerOffset: -15,
        name: 'Rio de Janeiro: 100,000 daily users',
        coordinates: [-43.279136, -22.918496],
    },
]

export default class MapsDataTab extends React.Component {
    render() {
        return (
            <div id="map">
                <Container>
                    <Row>
                        <Col className="one column">
                            <h1>Global company milestones</h1>
                            <ComposableMap>
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography
                                                fill="#faffc8"
                                                stroke="#D6D6DA"
                                                key={geo.rsmKey}
                                                geography={geo}
                                            />
                                        ))
                                    }
                                </Geographies>
                                {datapoints.map(
                                    ({ name, coordinates, markerOffset }) => (
                                        <Marker
                                            key={name}
                                            coordinates={coordinates}
                                        >
                                            <circle r={5} fill="#098" />
                                            <text
                                                textAnchor="middle"
                                                y={markerOffset}
                                                style={{
                                                    fill: '#5D5A6D',
                                                }}
                                            >
                                                {name}
                                            </text>
                                        </Marker>
                                    )
                                )}
                            </ComposableMap>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
