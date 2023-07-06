import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'
export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container_fluid">
                <a className="navbar-brand" href="#">
                <Link to='/Home'>SHOP KHÁNH LƯU</Link> 
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
                        <a className="nav-link " aria-current="page" href="#">Mua Thêm</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> <Link to='/Man'>Nam</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link to='/Woment'>Nữ</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link to='/Goft'>Goft</Link></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><Link to='/Child'>Child</Link></a>
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
                <div className='icon flex'>
                    {/* <button><Link to="/login">log in</Link></button> */}
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <Link className="icon_img fa-solid fa-user" to='/Login'></Link>
                    <Link className="icon_img fa-solid fa-cart-shopping" to='/Cart'></Link>
                </div>

            </div>
        </nav >
    )
}
