import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Alert from './Alert';

const Signup = () => {
    const navigate = useNavigate();
    const host = "http://localhost:5000"
    const [auth, setAuth] = useState({ name: "", email: "", password: "" });
    const { name, email, password } = auth;
    const [alertMsg, setAlertMsg] = useState({ message: "", type: "" });

    const onChange = (e) => {
        setAuth({ ...auth, [e.target.id]: e.target.value });
        // console.log(note);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
        const json = await response.json();
        // console.log(json);

        if (json.success) {
            localStorage.setItem('token', json.token);
            setAlertMsg({ message: "Signup successful!", type: "success" });
            //close the alert after 3 seconds
            setTimeout(() => {
                setAlertMsg(null);
                navigate("/home");
            }, 1500);
        }
        else {
            setAlertMsg({ message: json.error || json.errors?.[0]?.msg || "Unable to create account, please try again.", type: "danger" });
            setTimeout(() => {
                setAlertMsg(null);
                setAuth({ name: "", email: "", password: "" });
            }, 1500);
        }
    }

    return (
        <div className="container my-3">
            
            {alertMsg && <Alert message={alertMsg.message} type={alertMsg.type} />}
            <h1>Sign up/Create an account</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" value={auth.name} onChange={onChange} />
                </div>
                <div id="nameHelpBlock" className="form-text mb-3">
                    Your name must be 3-100 characters long and must not contain special characters.
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" value={auth.email} onChange={onChange} />
                </div>
                <div>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" id="password" className="form-control" aria-describedby="passwordHelpBlock" value={auth.password} onChange={onChange} />
                </div>
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be 5-20 characters long, contain at least 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number, and must not contain spaces or emoji.
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3 mt-3" >Signup</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
