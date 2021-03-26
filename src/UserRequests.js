import { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment';

export default function UserRequests() {
    const [phone_number, setPhoneNumber] = useState('')
    const [bookings, setBookings] = useState([])
    const [success, isSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isNoData, setIsNoData] = useState(false)

    // INITIALIZE DATATABLE
    const handleSubmit = async(e)=>{
        e.preventDefault()

        setIsLoading(true)
        setIsNoData(false)
        setError('')
        setError('')

        const input = phone_number

        try {
            const response = await axios.get(`http://139.162.134.202:8000/api/service-request/get-service-requests-by-phone-number/${phone_number}`)
            setIsLoading(false)

            if(response.data.payload.length === 0) {
                setIsNoData(true)
                return
            } 
            console.log(response.data.payload)
            setBookings(response.data.payload)
            isSuccess(true)
           
         } catch (error) {
          
            setIsLoading(false)
            setError('An error occurred try again')
          
           
         }

    }

    return (
        <div id="user_requests">
            <div className="user_requests_inner_container">
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-11 col-md-10 col-lg-9 my-3">
                        <form className="pt-3" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input required type="text" 
                                    onChange={(e) => setPhoneNumber(e.target.value)} 
                                    className="form-control" placeholder="Enter your phone number to view your requests...">
                                </input> 
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-11 col-sm-11 col-md-10 col-lg-9 mb-2">
                                    {error && <div className="alert alert-danger"> { error }</div>}
                                </div>
                                <div className="col-11 col-sm-11 col-md-10 col-lg-9 mb-3 d-flex justify-content-center">
                                    {!isLoading && <button className="btn search  mt-2 my-sm-0" 
                                        type="submit">Search
                                    </button> }
                                    {isLoading && <button  type="button" className="btn search">Loading...</button>}
                                </div>
                            </div>
                        </form>
                    </div>
                    {isNoData && <div className="alert alert-success col-11 col-sm-11 col-md-10 col-lg-9 my-3 py-3">
                        <p> No data available for this phone number</p>
                        <p> Enter the correct phone number and try again</p>
                    </div>}
                    {success && <div className="col-11 col-sm-11 col-md-10 col-lg-9 mt-3 mb-5 table_container">
                         <h3 className="pb-3">My Bookings</h3>
                        <div className="table-responsive">
                            <table id="bookings" className="display "width="100%" className="table table-hover table-bordered mb-0" id="table" role="grid" data-toggle="table" data-pagination="true" data-resizable="true" data-click-to-select="true">
                                <thead>
                                    <tr>
                                        <th>Created on</th>
                                        <th>Service Request Type</th>
                                        <th>Service Request Charge</th>
                                        <th>Address</th>
                                        <th>Landmark</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { bookings.map(booking => (
                                        <tr key={booking.service_request_id}>
                                            <td><Moment format="D MMM YYYY">{booking.created_at}</Moment></td>
                                            <td>{booking.service_request_type_name}</td>
                                            <td>{booking.service_request_charge_value}</td>
                                            <td>{booking.customer_address}</td>
                                            <td>{booking.closest_landmark}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}
