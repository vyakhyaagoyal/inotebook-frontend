import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

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
            alert("Login successful!");
            navigate("/");
        }
        else{
            alert("Invalid credentials, please try again.");
            setAuth({ email: "", password: "" });
        }
    }

    return (
        <div className="container my-3">
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
