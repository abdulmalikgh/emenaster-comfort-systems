import { useState } from 'react'
import axios from 'axios'

export default function UserRequests() {
    const [phone_number, setPhoneNumber] = useState('')
    const [bookings, setBookings] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    // methods
    const handleSubmit = async(e)=>{
        e.preventDefault()

        setIsLoading(true)
        setError('')

        const input = phone_number
        try {
            const response = await axios.get(`http://139.162.134.202:8000/api/service-request/get-service-requests-by-phone-number/${phone_number}`)
            setIsLoading(false)
            console.log('response', response)
   
         } catch (error) {
             console.log('err', error)
            // if(error?.response?.data == undefined) {
            //     setIsLoading(false)
            //     setError('Network error try again.')
            // }
           
         }

    }

    return (
        <div id="user_requests">
            <div className="user_requests_inner_container">
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-11 col-md-10 col-lg-9 my-3">
                        <form className="" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input required type="text" 
                                    onChange={(e) => setPhoneNumber(e.target.value)} 
                                    className="form-control" placeholder="Enter your phone number or booking id">
                                    </input> 
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-11 col-sm-11 col-md-10 col-lg-9 mb-3">
                                    {error && <div className="alert alert-danger"> { error }</div>}
                                </div>
                                <div className="col-11 col-sm-11 col-md-10 col-lg-9 mb-3 d-flex justify-content-center">
                                    {!isLoading && <button className="btn btn-outline-success my-2 my-sm-0" 
                                        type="submit">Search
                                    </button> }
                                    {isLoading && <button  type="button" className="btn btn-success ">Loading...</button>}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
