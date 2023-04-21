import {useNavigate} from "react-router-dom"
export default function Login(props) {
    const navigate = useNavigate();
    function handleClick(event) {
        props.onLogin(event);
        navigate("/")
    }
    return (
        <>
            <h1>Login</h1>
            <button onClick={handleClick}>Entrar</button>
        </>
    )
}