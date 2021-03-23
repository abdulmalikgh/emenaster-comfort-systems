import React from 'react'
import appointments from './assets/appointments.svg'
import request from './assets/schedule.svg'
import contact from './assets/contactimage.svg'
import { Link } from 'react-router-dom'
export default function Main() {
    return (
        <main id="main_container"> 
            <div className='main__card__wrapper'>
                <div className=" main__card">
                    <div className='card__image'>
                        <img height="120" src={appointments} alt="service request"/>
                    </div>
                    <div className="card__button">
                        <Link to="/service_request"  className="draw-border button btn">
                            Service Request
                        </Link>
                    </div>
                </div>
                <div class=" main__card">
                    <div className='card__image'>
                        <img height="120" src={request} alt="My requests" />
                    </div>
                    <div className="card__button">
                        <button className="draw-border button">
                            My Bookings
                        </button>
                    </div>
                </div>
                <div className=" main__card">
                    <div className='card__image'>
                        <img height="120" src={contact} alt="contact us" />
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
