import React from 'react';
import { Link } from 'react-router-dom';
let Navbar = () => {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">AUTOMATION SOLUTION</Link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse mx-auto" id="navbarNavAltMarkup">
                        <div class="navbar-nav ">
                            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link class="nav-link" to="/about">About us</Link>
                            <Link class="nav-link" to="/con">Contact us</Link>
                            <Link class="nav-link" to="/cor">Courses</Link>
                            
                            
                            <Link class="nav-link " to="/rev">TESTIMONIALS</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </React.Fragment>
    )
}
export default Navbar;