import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

export default function FilterConstacts({onFilterChange}){
    return (
        <Form.Control
            type="text"
            placeholder="почніть вводити ім'я контакту для пошуку"
            onChange={onFilterChange}
        />
    )
}

FilterConstacts.propTypes = {
    onFilterChange: PropTypes.func
}