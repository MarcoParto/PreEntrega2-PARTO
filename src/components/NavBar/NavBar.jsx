import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import './NavBar.css'
import { Link } from 'react-router-dom'

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
                            <Link className="nav-link active navbar-custom-text" aria-current="page" to="/category/mangas">Mangas</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link active navbar-custom-text" to="/category/comics">Comics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active navbar-custom-text" to="/category/libros">Libros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active navbar-custom-text" to="/category/juegos-de-rol">Juegos de Rol</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active navbar-custom-text" to="/category/figuras">Figuras</Link>
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