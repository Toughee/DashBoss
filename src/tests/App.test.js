import { render } from '@testing-library/react'
import App from '../App'

test('Renders front end section of app with no error message', () => {
    render(<App />)
})
