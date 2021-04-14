import { useState, useEffect } from 'react'
import appointments from './assets/demo.png'
import request from './assets/services.png'
import contact from './assets/benefit.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios'
// background images
import imageone from './assets/bg/DSC00136-min.jpeg'
import smallImageOne  from './assets/rsz_banner0.png'
import imagetwo from './assets/bg/DSC00235-min.jpeg'
import smallImageTwo from './assets/rsz_banner2-min.png'
import imagethree from './assets/bg/WhatsApp Image 2021-04-08 at 9.22.23 PM.jpeg'
import smallImageThree from './assets/rsz_1banner3.png'

export default function Main() {

    const [phoneNumber, setPhoneNumber] = useState('')
    const [error, setError] =  useState('')
    const [success, setSuccess] = useState('')
    
    const imageOne = window.innerHeight >= 767 ? imageone : smallImageOne
    const imageTwo = window.innerHeight >= 767 ? imagetwo : smallImageTwo
    const imageThree = window.innerHeight >= 767 ? imagethree : smallImageThree

    const handleSubmit = async()=>{
        setError('')
        setSuccess('')
        
        try {
            const response = await axios.get(`https://dashboard.emenaster.com/api/service-request/get-service-requests-by-phone-number/${phoneNumber}`) 
            if(response.data.payload.length === 0) {
                setError('Opps! phone number not registered')
                setTimeout(function(){ setError('')}, 5000)
            }
            if(response.data.payload.length > 0) {
                localStorage.setItem('user_requests', JSON.stringify(response.data.payload))
                window.location.replace('/#/customer/bookings')
            }
         } catch (error) {
            setError('An error occurred try again')
         }
    }

    return (
        <main id="main_container"> 
           <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item image_one active">
                            {/* <img className="" src={imageone} alt="first image" /> */}
                        </div>
                        <div className="carousel-item image_two" >
                            {/* <img className=""  src={imagetwo} alt="first image" /> */}
                        </div>
                        <div className="carousel-item image_three">
                            {/* <img className="" src={imagethree} alt="first image" /> */}
                        </div>
                    </div>
                    <div className="sidebar_content">
                        <h2>Hello, Welcome to </h2>
                        <h1>
                            Emenaster Service Portal
                        </h1>
                        <p>Please enter your phone number to check your request status </p>
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
                                    <p className="py-1"> <FontAwesomeIcon color="#0060DB" icon={faLongArrowAltRight}  /> {" "} Provide personal details.</p>
                                    <p className="py-1"> <FontAwesomeIcon color="#0060DB" icon={faLongArrowAltRight}  /> {" "} Choose preferred time. </p>
                                    <p className="py-1"> <FontAwesomeIcon color="#0060DB" icon={faLongArrowAltRight}  /> {" "} Manage your bookings.</p>
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
           </>
        </main>
    )
}
