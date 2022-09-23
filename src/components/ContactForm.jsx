import PropTypes from 'prop-types'
import React from "react";
import { Button, Form } from 'react-bootstrap';


export default function ContactForm({addContact}){

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const number = event.target.number.value
        if(addContact({name, number})){ 
            event.target.name.value = ""
            event.target.number.value = ""
        }
    }

    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>І'мя</Form.Label>
                <Form.Control 
                    type='name' 
                    name='name' 
                    placeholder="Введіть і'мя" 
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Номер</Form.Label>
                <Form.Control 
                    type='tel' 
                    name='number' 
                    placeholder="Введіть номер телефону" 
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </Form.Group>
            <Button type="submit">Створити контакт</Button>
        </Form>
    )
}

ContactForm.propTypes = {
    addContact: PropTypes.func,
    nameChange: PropTypes.func,
    phone: PropTypes.func
}