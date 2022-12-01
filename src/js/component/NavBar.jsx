import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary p-3 mb-4">
            <div className="container-fluid">
                <h2 className="text-aling align-text-top">Plants & Mood❤</h2>
                <div className="d-flex" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};


export default NavBar;