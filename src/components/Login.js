import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Alert from './Alert';

const Login = () => {
    const navigate = useNavigate();
    const [alertMsg, setAlertMsg] = useState({ message: "", type: "" });

    const host = "http://localhost:5000"
    const [auth, setAuth] = useState({ email: "", password: "" });
    const { email, password } = auth;
    const onChange = (e) => {
        setAuth({ ...auth, [e.target.id]: e.target.value });
        // console.log(note);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const json = await response.json();
        // console.log(json);
        if(json.success){
            
            localStorage.setItem('token', json.token);
            setAlertMsg({ message: "Login successful!", type: "success" });
            //close the alert after 3 seconds
            setTimeout(() => {
                setAlertMsg(null);
                navigate("/home");
            }, 1500);
        }
        else{
            setAlertMsg({ message: "Invalid credentials, please try again.", type: "danger" });
            setTimeout(() => {
                setAlertMsg(null);
                setAuth({ email: "", password: "" });
            }, 1500);
        }
    }

    return (
        <div className="container my-3">
            {alertMsg && <Alert message={alertMsg.message} type={alertMsg.type} />}
            <h1>Login to continue to your account</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={auth.email} onChange={onChange} />
                </div>
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" value={auth.password} onChange={onChange} />
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3 mt-3" >Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
