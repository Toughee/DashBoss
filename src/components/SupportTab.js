import React from 'react'

import '../App.css'

export default class SupportTab extends React.Component {
    render() {
        return (
            <div className="AdminContentPageStyle">
                <h1>Support:</h1>
                <hr />

                <p>
                    Submit a new Pull Request{' '}
                    <a href={'https://github.com/Toughee/DashBoss/pulls'}>
                        {' '}
                        here
                    </a>
                    |
                    <a
                        href={
                            'https://github.com/Toughee/DashBoss/blob/main/docs/PULL_REQUEST_TEMPLATE.md'
                        }
                    >
                        {' '}
                        following these guidelines
                    </a>
                </p>

                <p>
                    Report a bug here
                    <a href={'https://github.com/Toughee/DashBoss/issues'}>
                        {' '}
                        here
                    </a>
                    <a
                        href={
                            'https://github.com/Toughee/DashBoss/blob/main/docs/BUG_REPORT.md'
                        }
                    >
                        {' '}
                        following these guidelines
                    </a>
                </p>

                <p>
                    Request new features/additional content
                    <a href={'https://github.com/Toughee/DashBoss/pulls'}>
                        {' '}
                        here
                    </a>
                    |
                    <a
                        href={
                            'https://github.com/Toughee/DashBoss/blob/main/docs/FEATURE_REQUEST.md'
                        }
                    >
                        {' '}
                        following these guidelines
                    </a>
                </p>
            </div>
        )
    }
}
