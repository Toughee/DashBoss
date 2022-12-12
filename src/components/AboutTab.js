import React from 'react'

import '../App.css'

export default class AboutTab extends React.Component {
    render() {
        return (
            <div className="AdminContentPageStyle">
                <h1>Dashboss is:</h1>
                <hr />

                <p>
                    <strong>A company summary at a glance:</strong> <br />
                    Have everything related to your company displayed in one
                    single app. See how sales, conversion rates and client
                    engagements happen
                </p>

                <p>
                    <strong>All relevant corporate info in one web app:</strong>
                    <br />
                    Receive a quick summary for everything related to your
                    company and have it easily
                </p>

                <p>
                    <strong>Proof of concept: </strong>
                    <br />
                    The app is entirely a example of an admin page and is not
                    related to any exisitng company
                </p>
                <h1>Support:</h1>
                <hr />

                <p>
                    Submit a new Pull Request to add or include additional
                    content{' '}
                    <a href={'https://github.com/tjdev7/DashBoss/pulls'}>
                        {' '}
                        here
                    </a>
                </p>

                <p>
                    Guidelines for requesting new features/additional content
                    <a
                        href={
                            'https://github.com/tjdev7/DashBoss/blob/main/docs/FEATURE_REQUEST.md'
                        }
                    >
                        {' '}
                        here
                    </a>
                </p>
            </div>
        )
    }
}
