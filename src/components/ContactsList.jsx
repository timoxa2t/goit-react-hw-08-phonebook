import PropTypes from 'prop-types'
import { Button, Table } from 'react-bootstrap'

export default function ContactsList({contacts, removeContact}){


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Телефон</th>
                    <th>Видалити</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(({name, id, number}, index) =>                     
                    <tr key={id}>
                        <td>{name}</td>
                        <td>{number}</td>
                        <td><Button onClick={() => removeContact(id)}>Delete</Button></td>
                    </tr>
                        
                    // <ListGroup key={id} horizontal={true} className="my-2">
                    //     <ListGroup.Item variant={getVariant(index)}>{name}</ListGroup.Item>
                    //     <ListGroup.Item variant={getVariant(index)}>{number}</ListGroup.Item>
                    //     <ListGroup.Item variant={getVariant(index)}><Button onClick={() => removeContact(id)}>Delete</Button></ListGroup.Item>
                    // </ListGroup>
                )}
            </tbody>
        </Table>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.array
}