import { useEffect, useState } from "react"
import { Button, Form, Modal } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginUser } from "redux/actions/user"


export default function Login(){

    const [show, setShow] = useState(true)
    const token = useSelector(store => store.user.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        if(token && token !== ""){
          navigate("/goit-react-hw-08-phonebook/contacts")
        }
      }, [token, navigate])

    const handleClose = () => {
        setShow(false)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const {email, password } = evt.target
        dispatch(loginUser({
            email: email.value,
            password: password.value
        }))
    }

    return  (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Увійти в телефонну книгу</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Пошта</Form.Label>
                        <Form.Control type='mail' name='email' placeholder="Введіть пошту" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control type='password' name='password' placeholder="Введіть пароль" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Логін
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}