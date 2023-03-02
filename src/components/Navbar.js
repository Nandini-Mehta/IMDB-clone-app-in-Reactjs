import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark" >
            <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/90px-IMDB_Logo_2016.svg.png' alt='logo'></img></Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/movies/popular">Popular</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/movies/top_rated'>Top-Rated</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/movies/upcoming'>Upcoming</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
