import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom'

function NavBar({cartCount}) {
    return (
        <nav className="navbar navbar-expand-lg bg-custom-grey">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/assets/logo.png" alt="Logo" width="auto" height="100" className="d-inline-block align-text-top" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active navbar-custom-text" to="/category/mangas">MANGAS</NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink className="nav-link active navbar-custom-text" to="/category/comics">COMICS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active navbar-custom-text" to="/category/libros">LIBROS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active navbar-custom-text" to="/category/juegos-de-rol">JUEGOS DE ROL</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active navbar-custom-text" to="/category/figuras">FIGURAS</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                       <CardWidget cartCount={cartCount} />
                    </div>
                 </div>
            </div>
        </nav>
    )
}

export default NavBar