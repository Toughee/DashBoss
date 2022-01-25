import { render } from '@testing-library/react'
import ChangelogTab from '../components/ChangelogTab'

test('Renders component with no issues or error messages', () => {
    render(<ChangelogTab />)
})
