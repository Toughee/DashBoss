import React from 'react'

import '../App.css'

export default class SupportTab extends React.Component {
    render() {
        return (
            <div className="AdminContentPageStyle">
                <h1>Support:</h1>
                <hr />

                <p>
                    Submit a new Pull Request to add or include additional
                    content{' '}
                    <a href={'https://github.com/Toughee/DashBoss/pulls'}>
                        {' '}
                        here
                    </a>
                </p>

                <p>
                    Guidelines for requesting new features/additional content
                    <a
                        href={
                            'https://github.com/Toughee/DashBoss/blob/main/docs/FEATURE_REQUEST.md'
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
