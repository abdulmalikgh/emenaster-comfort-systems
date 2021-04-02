import { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


export default function UserRequests() {
    const [phone_number, setPhoneNumber] = useState('')
    const [bookings, setBookings] = useState([])
    const [success, isSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [isNoData, setIsNoData] = useState(false)
    const [show, setShow] = useState(false)
    const [showC, setCancel] = useState(false)
    const [request_id, setRequestID] = useState('')
    const [currentBooking, setCurrentBooking] = useState('')
    const [cancelLoading, setCancelLoading] = useState(false)
    const [cancelError, setCancelError ] = useState('')
    const [cancelSuccess, setConcelSuccess] = useState('')
    const [requestIndex, setRequetIndex] = useState('')
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


    const showCancel = (id, index) => { 
        setConcelSuccess(null)
        if(id) {
            setRequestID(id)
        }
        if(index) {
            setRequetIndex(index)
        }
        setCancel(true)
    }

    const hideCancel = () => { setCancel(false) }

    const showDetails = (data) => { 
        if(data) {
            setCurrentBooking(data)
        }
        setShow(true)
    }
    const hideDetails = () => { setShow(false)}

    const cancelRequest = async () => {
        setCancelLoading(true)
        try {
            const response = await axios.delete(`http://139.162.134.202:8000/api/service-request/delete-service-by-service-request-id/${request_id}`)
            if(response) {
                setCancelLoading(false)
                setConcelSuccess('Service request cancelled successfully')
                bookings.splice(requestIndex, 1)
            }
        } catch (error) {
            setCancelLoading(false)
            if(error) {
                setCancelError('An Error Occured try again.')
            }
        }
    
    }

    return (
        <div id="user_requests">
            <div className="user_requests_inner_container">
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-11 col-md-10 col-lg-9 my-3">
                        <form className="pt-3" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input required type="tel" 
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
                                        <th>Service Sequested on</th>
                                        <th>Service Request ID</th>
                                        <th>Service Request Type</th>
                                        <th>GPS / Closest Landmark</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { bookings.map((booking, index) => (
                                        <tr key={booking.service_request_id}>
                                            <td><Moment format="D MMM YYYY">{booking.created_at}</Moment></td>
                                            <td>{booking.service_request_id}</td>
                                            <td>{booking.service_request_type_name}</td>
                                            <td>{booking.customer_address}</td>
                                            <td className="button_wrapper">
                                                <button onClick={() => showDetails(booking)}  type="button" className="btn  details" >
                                                    Details
                                                </button>
                                                <button type="button" className="btn cancel" 
                                                    onClick={()=> showCancel(booking.service_request_id, index)}>
                                                    Cancel
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>}
                </div>
            </div>
            {/*Details modal content */}
            <Modal show={show} onHide={hideDetails}>
                <Modal.Header closeButton>
                <Modal.Title>Request Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> <strong>Request ID : </strong> {' '} {currentBooking.service_request_id}</p>
                    <p> <strong>Requested on : </strong> {' '} <Moment format="D MMM YYYY">{currentBooking.created_at}</Moment></p>
                    <p> <strong>Requested By : </strong> {' '} {currentBooking.customer_name}</p>
                    <p> <strong>Address : </strong> {' '} {currentBooking.service_request_id}</p>
                    <p> <strong>Closest Location: </strong> {' '} {currentBooking.customer_address}</p>
                    <p> <strong>Phone Number : </strong> {' '} {currentBooking.customer_phone_number}</p>
                    <p> <strong>Quantity requested: </strong> {' '} {currentBooking.quantity}</p>
                    <p> <strong>Request type : </strong> {' '} {currentBooking.service_request_type_name}</p>
                    <p> <strong>Request Charge : </strong> {' '} {currentBooking.service_request_charge_value}</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={hideDetails}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            {/* end of modal content */}
            {/* cancel modal  */}
            <Modal show={showC} onHide={hideCancel}>
                <Modal.Header closeButton>
                <Modal.Title>Cancel Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   <div>
                    {!cancelSuccess && <p>Do you really want to cancel this request?</p>}
                    {cancelError && <div className="alert alert-danger"> { cancelError }</div>}
                    {cancelSuccess && <div className="alert alert-success"> { cancelSuccess } </div>}
                   </div>
                </Modal.Body>
                <Modal.Footer>
                 
                 {
                     !cancelSuccess && <div>
                          <Button variant="secondary" onClick={hideCancel}>
                            NO
                        </Button>{' '}
                        { cancelLoading && <button  type="button" className="btn btn-primary">Loading...</button>}
                        { !cancelLoading && <Button variant="primary" onClick={cancelRequest}>
                            Yes
                        </Button>}
                     </div>
                 }
                 {
                     cancelSuccess && <Button variant="secondary" onClick={hideCancel}>
                     Close
                 </Button>
                 }
                </Modal.Footer>
            </Modal>
        </div>
    )
}
