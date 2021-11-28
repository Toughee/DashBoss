import React from 'react'

export default class ChangelogTab extends React.Component {
    render() {
        return (
            <div className="AdminContentPageStyle">
                <h1>Version 1.0.2</h1>
                <p>Added gh-pages to project for eventual app deployment</p>
                <p>Added new node modules to improve app deployment</p>
                <p>Updated the majority of the components inside app</p>

                <hr />

                <h1>Version 1.0.1</h1>
                <p>Added React environment into app</p>
                <p>Added documentation for future project contributors</p>
                <p>Added CI scripts for testing</p>
                <p>Developed initial U.I. and Front end design for app</p>

                <hr />
            </div>
        )
    }
}
