import { Button, Form, Modal } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { registerNewUser } from "redux/actions/user"


export default function Register(){

    const [show, setShow] = useState(true)
    const token = useSelector(store => store.user.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClose = () => {
        setShow(false)
    }

    useEffect(() => {
        if(token !== ""){
          navigate("/goit-react-hw-08-phonebook/contacts", { replace: true })
        }
      }, [token, navigate])

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const {name, email, password } = evt.target
        dispatch(registerNewUser({
            name: name.value,
            email: email.value,
            password: password.value
        }))
    }

    return  (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Введіть дані для реєстрації</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Ім'я</Form.Label>
                        <Form.Control type='text' name='name' placeholder="Введіть ім'я" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Пошта</Form.Label>
                        <Form.Control type='mail' name='email' placeholder="Введіть пошту" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type='password' name='password' placeholder="Введіть пароль" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Зареєстуватись
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}