import { Button, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "redux/actions/user";

export default function UserMenu(){

    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const goToLoginPage = () => {
        navigate("/goit-react-hw-08-phonebook/login", { replace: true })
    }

    const handleCkick = () => {
        dispatch(logoutUser({token: user.token, callback: goToLoginPage}))
        
    }

    return  (
        <>
            <Navbar.Text>{user.email}</Navbar.Text>
            <Button variant="outline-success" onClick={handleCkick}>Вийти</Button>
        </>
    )
}