import React from 'react'
import logo from './assets/logsmall.png'
import menu from './assets/menu.svg'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { useEffect } from 'react'

export default function AppNav() {
    if(window.innerWidth == 768) {
          
    }
    useEffect(() => {
       $('.navbar-toggler').on('click', function() {
           $('#navbarSupportedContent').addClass('border_top') 
       })
    }, [])
    return (
        <>
            <nav id="app_nav_bar" className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" height="60"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={menu} height="40" alt="" />
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/customer/service_request">Book Request</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/customer/bookings">My Bookings</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#footer">Contact Us</a>
                        </li>
                    </ul>
        
                </div>
            </nav>
        </>
    )
}
