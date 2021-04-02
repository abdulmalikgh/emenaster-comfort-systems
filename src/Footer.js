import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logsmall.png'
import Midea from './assets/logos/Midea_logo.png'
import Gree from './assets/logos/gree.jpg'
import Diakin from './assets/logos/daikin-logo-blue-brand-aqua.jpg'
import Whirlpool from './assets/logos/whirlpool.png'
import Samsung from './assets/logos/sumsung.png'
import LG from './assets/logos/lg.png'
import Hisense from './assets/logos/hisense.png'
import Bruhm from './assets/logos/images.jpg'

export default function Footer() {

    const [date, setDate] = useState(new Date().getFullYear())
  

    return (
        <div  id="footer">
            <div className="row">
                <div className="col-md-3 mt-4">
                    <h3>EMENASTER <br />
                    COMFORT SYSTEM</h3>
                    <small>EVERYTHING COOLING</small>
                </div>
                <div className="col-md-6 mt-4 foot-menu">
                    <h4 className="quick_link">Some of the many brands we work on</h4>  
                    <hr/>
                    <div className="row">
                        <div className="col-6">
                            {/* <img src={Midea} alt="mideas"  height="50" /> <br />
                            <img src={Gree} alt="mideas" height="50" /> <br />
                            <img src={Diakin} alt="mideas"  height="50" /> <br />
                            <img src={Whirlpool} alt="mideas" height="50" /> */}
                            <p>Midea</p>  
                            <p>Gree</p>
                            <p>Diakin</p>
                            <p>Whirlpool</p>
                        </div>
                        <div className="col-6">
                            <p>Samsung</p>
                            <p>LG</p>
                            <p>Hisense</p>
                            <p>Bruhm</p>
                            {/* <img src={Samsung} alt="mideas" height="50" /> <br />
                            <img src={LG} alt="mideas" height="50" /><br />
                            <img src={Hisense} alt="mideas" height="50" /> <br />
                            <img src={Bruhm} alt="mideas" height="50" />  */}
                        </div>
                    </div>
                   {/* <ul>
                       <li> <Link className="footer-link">Book Request </Link> </li>
                       <li> <Link className="footer-link">My Requests </Link> </li>
                       <li> <Link className="footer-link">Contact us </Link> </li>
                   </ul> */}
                </div>

                <div className="col-md-3 mt-4">
                    <h4>Contact Us</h4>
                    < hr/>
                    <a href='mailto:emenastercomfort@gmail.com'>
                        emenastercomfort@gmail.com
                    </a>
                    <p>P.O Box 28941.</p>
                    <p>East Legon. La Bawaleshie</p>
                    <p>+233244005656</p>
                </div>
            </div>
            <div className="row justify-content-center mt-5">

                <div className="col-">
                    <hr />
                    <p>Copyright &copy; { date } Emenaster, All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
