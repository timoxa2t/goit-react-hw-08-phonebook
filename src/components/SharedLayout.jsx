import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";
import UserMenu from "./UserMenu";

export default function SharedLayout(){

    const token = useSelector(store => store.user.token)

    return (
        <>  
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/goit-react-hw-08-phonebook/contacts">Контакти</Navbar.Brand>
                    {token === "" ? 
                        <Nav className="me-auto">
                            <Nav.Link href="/goit-react-hw-08-phonebook/login">Вхід</Nav.Link>
                            <Nav.Link href="/goit-react-hw-08-phonebook/register">Реєстрація</Nav.Link>
                        </Nav>
                        :
                        <UserMenu/>
                    }   
                </Container>
            </Navbar>
            <Suspense fallback={
                <>Завантаження.....</>
            }>
                <Outlet/>
            </Suspense>
        </>
    )
}

