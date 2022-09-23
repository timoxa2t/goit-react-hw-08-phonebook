import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'

export default function Section({title, children}){

    return (
        <Card className='m-3'>
            <Card.Header as="h2">{title}</Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
        </Card>
    )
}


Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.element, 
        PropTypes.arrayOf(PropTypes.element)
    ])
}