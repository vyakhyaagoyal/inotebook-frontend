import React from 'react'

const Login = () => {
    
    const handleSubmit=()=>{

    }

    return (
        <div className="container my-3">
            <form>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <label htmlFor="inputPassword5" className="form-label">Password</label>
            <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3 mt-3" onSubmit={handleSubmit}>Login</button>
                </div>
                </form>
            </div>
    )
}

export default Login
