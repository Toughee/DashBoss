import { render } from '@testing-library/react'
import SupportTab from '../components/SupportTab'

test('Renders component with no issues or error messages', () => {
    render(<SupportTab />)
})
