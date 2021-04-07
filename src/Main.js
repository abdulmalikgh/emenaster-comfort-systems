import { useState, useEffect } from 'react'
import appointments from './assets/demo.png'
import request from './assets/services.png'
import contact from './assets/benefit.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
// background images
import imageONe from './assets/banner0.png'
import imageTwo from './assets/banner2.png'
import imageThree from './assets/banner3.png'

export default function Main() {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [error, setError] =  useState('')
    const [success, setSuccess] = useState('')
    
    const handleSubmit = async()=>{
        setError('')
        setSuccess('')
        
        try {
            const response = await axios.get(`http://139.162.134.202:8000/api/service-request/get-service-requests-by-phone-number/${phoneNumber}`) 
            if(response.data.payload.length === 0) {
                setError('Opps! phone number not registered')
                setTimeout(function(){ setError('')}, 3000)
            }
            if(response.data.payload.length > 0) {
                localStorage.setItem('user_requests', JSON.stringify(response.data.payload))
                window.location.replace('/customer/bookings')
            }
         } catch (error) {
            setError('An error occurred try again')
         }
    }

    return (
        <main id="main_container"> 
           <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="" src={imageONe} alt="first image" />
                    </div>
                    <div className="carousel-item " >
                        <img className=""  src={imageThree} alt="first image" />
                    </div>
                    <div className="carousel-item ">
                        <img className="" src={imageTwo} alt="first image" />
                    </div>
                </div>
                <div className="sidebar_content">
                    <h2>Hello, Welcome to </h2>
                    <h1>
                        Emenaster Service Porta
                    </h1>
                    <p>Please enter your <br /> phone number to check your request status </p>
                    <input type="text" onChange={e => setPhoneNumber(e.target.value)} pattern="[1-9]{1}[0-9]{9}" maxLength="10" placeholder="Number" /> <button title="Enter a valid phone number" className={!phoneNumber ? 'opacity':''} disabled={!phoneNumber} onClick={handleSubmit}>Search</button>
                    { error && <p className="text-danger py-2 mt-1"> <small>{error} </small></p>}
                    { success && <p className="text-success py-2 mt-1"><small>{success}</small></p>}
                </div>
           </div>
           <div className="card__container__wraper">
            <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-5">
                        <div className="card_inside">
                            <div className="title-img">
                                <h2>Get a HVAC expert in 3 steps</h2>
                                <p className="py-1"> <FontAwesomeIcon color="#bf242a" icon={faLongArrowAltRight}  /> {" "}Provide personal detetails.</p>
                                <p className="py-1"> <FontAwesomeIcon color="#bf242a" icon={faLongArrowAltRight}  /> {" "} Choose preferred time. </p>
                                <p className="py-1"> <FontAwesomeIcon color="#bf242a" icon={faLongArrowAltRight}  /> {" "} Manage your bookings.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-5">
                    <div className="card_inside">
                            <div className="title-img">
                                <h2>Service Request</h2>
                            </div>
                            <div className="description">
                                <div><p>For maintenance and breakdown of products.
                                    
                                    </p></div>
                                <div className="mt-4 mb-3 text-right">
                                <p><Link className="book-now" to="/customer/service_request" >Book Now</Link></p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-12 mb-5">
                    <div className="card_inside">
                            <div className="title-img">
                            <h2>My Bookings</h2>
                            </div>
                            <div className="description">
                                <div>
                                     <p>Manage your bookings.</p>
                                </div>
                                <div className="mt-4 mb-3 text-right"><p className="link_wrapper"><Link className="book-now" to="/customer/bookings" >Booking List</Link></p></div>
                                
                            </div>
                        </div>
                    </div>
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
