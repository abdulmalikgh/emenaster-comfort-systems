import React from 'react'
import logo from './assets/logsmall.png'
import menu from './assets/menu.svg'
import { Link } from 'react-router-dom'
export default function AppNav() {
    return (
        <>
            <nav id="app_nav_bar" className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="./index.html">
                    <img src={logo} alt="" height="60"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={menu} height="40" alt="" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" href="#">Book Request</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">Contact Us</Link>
                        </li>
                    </ul>
        
                </div>
            </nav>
        </>
    )
}
