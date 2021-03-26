import React from 'react'
import appointments from './assets/demo.png'
import request from './assets/services.png'
import contact from './assets/benefit.png'
import { Link } from 'react-router-dom'
export default function Main() {
    return (
        <main id="main_container"> 
            <div className='main__card__wrapper'>
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
                        <button className="draw-border button">
                            Contact Us
                        </button>
                    </div>
            </div>
        </div>
    </main>
    )
}
