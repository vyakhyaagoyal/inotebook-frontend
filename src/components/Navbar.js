import { Link } from 'react-router-dom';
import { useLocation } from 'react-router'
// import React, { useEffect } from 'react';

const Navbar = () => {

    let location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg text-primary-emphasis bg-primary-subtle border border-primary-subtle">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/About' ? 'active' : ''}`} to="/About">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className={`nav-link dropdown-toggle ${location.pathname === '/Dropdown' ? 'active' : ''}`} to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Action</Link></li>
                                    <li><Link className="dropdown-item" to="/">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/">Something else here</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control" placeholder="Search a note" aria-label="Search" />
                            <button className="btn btn-outline-primary mx-2" type="submit">Search</button>
                        </form>

                            <Link className="btn btn-primary mx-1" role="button" to="/login">Login</Link>
                            <Link className="btn btn-primary mx-1" role="button" to="/signup">Signup</Link>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
