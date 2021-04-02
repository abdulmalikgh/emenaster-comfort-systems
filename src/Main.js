import React from 'react'
import appointments from './assets/demo.png'
import request from './assets/services.png'
import contact from './assets/benefit.png'
import { Link } from 'react-router-dom'
// background images
import imageONe from './assets/banner0.png'
import imageTwo from './assets/banner2.png'
import imageThree from './assets/banner3.png'

export default function Main() {
    return (
        <main id="main_container"> 
           <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="" src={imageONe} alt="first image" />
                    </div>
                    <div className="carousel-item ">
                        <img className=""  src={imageThree} alt="first image" />
                    </div>
                    <div className="carousel-item ">
                        <img className="" src={imageThree} alt="first image" />
                    </div>
                </div>
                <div className="sidebar_content">
                    <h2>Hello, Welcome to </h2>
                    <h1>
                        Emenaster Service Porta
                    </h1>
                    <p>Please Login with <br /> your registered mobile number </p>
                    <input type="number" min="0" maxLength="10" placeholder="Number" /> <button>Login</button>
                </div>
           </div>
           {/* <div className='main__card__wrapper'>
                <div className=" main__card">
                    <div className='card__image  pt-3'>
                        <img height="100" src={appointments} alt="service request"/>
                    </div>
                    <div className="card__button">
                        <Link to="/customer/service_request"  className="draw-border button btn">
                            Service Request
                        </Link>
                    </div>
                </div>
                <div class=" main__card">
                    <div className='card__image pt-3'>
                        <img height="100" src={request} alt="My requests" />
                    </div>
                    <div className="card__button">
                        <Link className="draw-border button btn" to="/customer/bookings">
                            My Bookings
                        </Link>
                    </div>
                </div>
                <div className=" main__card">
                    <div className='card__image  pt-3'>
                        <img height="100" src={contact} alt="contact us" />
                    </div>
                    <div className="card__button draw-border">
                        <a className="draw-border button btn" href="tel:0244005656">
                            Contact Us
                        </a>
                    </div>
            </div>
        </div>  */}
        </main>
    )
}
