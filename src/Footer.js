import { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { faChevronUp} from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

import $ from 'jquery'

export default function Footer() {

    const [date, setDate] = useState(new Date().getFullYear())
    const [isHidden, setIsHidden] = useState(true)
    
    const handleHide = ()=> {
        setIsHidden(!isHidden)
        window.scrollTo(0,document.body.scrollHeight);
    }
    return (
        <div  id="footer">
            <div className="row justify-content-center">
                <div className="">
                    <button className="showOrHide" onClick={handleHide}>Quick Access {''} {isHidden &&  <FontAwesomeIcon icon={faChevronUp} />} 
                    {!isHidden && <FontAwesomeIcon icon={faChevronDown}  /> }</button>
                </div>
            </div>
            {!isHidden && 
                <div className="row justify-content-center hide">
                <div className="col-md-3 mt-4">
                    <h3>EMENASTER <br />
                    COMFORT SYSTEM</h3>
                    <small>EVERYTHING COOLING</small>
                </div>
                <div className="col-md-5 mt-4 foot-menu">
                    <h4 className="quick_link">Some of the many brands we work on</h4>  
                    <hr/>
                    <div className="row">
                        <div className="col-6">
                            <p>Midea</p>  
                            <p>Gree</p>
                            <p>Diakin</p>
                            <p>Whirlpool</p>
                        </div>
                        <div className="col-6">
                            <p>Samsung</p>
                            <p>LG</p>
                            <p>Hisense</p>
                            <p>Voltas</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 mt-4">
                    <h4>Contact Us</h4>
                    < hr/>
                    <p><a href='mailto:emenastercomfort@gmail.com'>
                        <FontAwesomeIcon color="#0060DB" icon={ faEnvelopeOpenText }  /> {" "}  emenastercomfort@gmail.com
                    </a> </p>
                    <p> <FontAwesomeIcon color="#0060DB" icon={ faAddressCard }  /> {" "} P.O Box 28941.</p>
                    <p> <FontAwesomeIcon color="#0060DB" icon={ faMapMarkerAlt }  /> {" "} East Legon. La Bawaleshie</p>
                    <p>  <FontAwesomeIcon color="#0060DB" icon={ faPhoneAlt }  /> {" "} +233244005656</p>
                </div>

                <div className="row justify-content-center">
                    <div className="mt-5">
                        <hr />
                        <p>Copyright &copy; { date } Emenaster, All rights reserved.</p>
                    </div>
                </div>
            </div> }         
        </div>
    )
}
