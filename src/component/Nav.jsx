import React from 'react'
import './Nav.scss'
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container_fluid">
                <a className="navbar-brand" href="#">
                    SHOP KHANH LUU
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <div className='navbar-toggler'><span className="navbar-toggler-icon" /></div>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Plant</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cactus</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Orchid</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Dried Bouquets</a>
                    </li>
                </ul>
            </div>
            <div className="searchBox d-flex" role="search">
                <div>
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />

                </div>
                <div className='icon'>
                    {/* <button><Link to="/login">log in</Link></button> */}
                    <button>aaaa</button>
                    <i className="icon_img fa-solid fa-user"></i>
                    <i className="icon_img fa-solid fa-cart-shopping"></i>
                </div>

            </div>
        </nav >
    )
}
