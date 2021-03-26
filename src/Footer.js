import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './assets/logsmall.png'

export default function Footer() {
    const [date, setDate] = useState(new Date().getFullYear())
    return (
        <div className="footer" id="footer ">
            <div className="row">
                <div className="col-md-4 copy-right">
                    <img src={logo} height="60" alt="" />
                </div>
                <div className="col-md-4 mt-4 foot-menu">
                    <h3 className="quick_link">Quick Links</h3>    
                   <ul>
                       <li> <Link>Book Request </Link> </li>
                       <li> <Link>My Requests </Link> </li>
                       <li> <Link>Contact us </Link> </li>
                   </ul>
                </div>
                <div className="col-md-4 mt-4">
                    <h3>Contact Us</h3>
                    <a href=''>emenaster@gmail.com</a>
                    <p>0245678978</p>
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
