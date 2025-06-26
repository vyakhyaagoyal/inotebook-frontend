import { useLocation, useNavigate,Link } from 'react-router'
// import React, { useState } from 'react';

const Navbar = ({ search, setSearch }) => {
    let location = useLocation();
    const navigate = useNavigate();

    const handleSearch=(e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg text-primary-emphasis bg-primary-subtle border border-primary-subtle">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>

                        </ul>
                        {location.pathname === '/home' && (
                            <form className="d-flex" role="search" onSubmit={handleSearch}>
                                <input className="form-control" placeholder="Search a note by title" aria-label="Search" value={search} onChange={e => setSearch(e.target.value)} />
                            </form>
                        )}

                        {location.pathname !== '/home' && location.pathname !== '/about' ? (
                            <>
                                <Link className="btn btn-primary mx-1" role="button" to="/login">Login</Link>
                                <Link className="btn btn-primary mx-1" role="button" to="/signup">Signup</Link>
                            </>
                        ) : <button className="btn btn-primary mx-1" role="button" onClick={() => {
                            localStorage.removeItem('token');
                            navigate('/login', { replace: true }); //cannot go back using back button after logout
                        }}>Logout</button>}
                        
                    </div>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navbar
