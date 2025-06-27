import { useLocation, useNavigate, Link } from 'react-router-dom'
// import React, { useState } from 'react';

const Navbar = ({ search, setSearch }) => {
    let location = useLocation();
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg text-primary-emphasis bg-transparent">
                <div className="container-fluid">

                    <Link className="navbar-brand d-flex align-items-center" to="/home" style={{ gap: "2px" }}>
                    <img src="favicon.png" style={{height:'45px',width:'80px', margin:'0',padding:'0'}}></img>
                    <span>iNotebook</span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">iNotebook</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                                </li>
                            </ul>
                            {location.pathname === '/home' && (
                                <form className="d-flex mx-2" role="search" onSubmit={handleSearch}>
                                    <input className="form-control" placeholder="Search a note by title" aria-label="Search" value={search} onChange={e => setSearch(e.target.value)} />
                                </form>
                            )}

                            {location.pathname !== '/home' && location.pathname !== '/about' ? (
                                <>
                                    <Link className="btn btn-primary mx-1" role="button" to="/login">Login</Link>
                                    <Link className="btn btn-primary mx-1" role="button" to="/signup">Signup</Link>
                                </>
                            ) : <button className="btn btn-primary mt-2 mx-2" role="button" onClick={() => {
                                localStorage.removeItem('token');
                                navigate('/login', { replace: true }); //cannot go back using back button after logout
                            }}>Logout</button>}

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
