import {useEffect, useState} from 'react'
import axios from 'axios'
import { faCommentDollar } from '@fortawesome/free-solid-svg-icons'

export default function RequestService() {
    const [serviceRequestTypes, setsServiceRequestTypes] = useState([])
    const [serviceRequestCharges, setServiceRequestCharges] = useState([])

    // FORM INPUTS
    const [customer_name, setCustomerName] = useState('')
    const [customer_phone_number, setCustomerPhoneNumber] = useState('')
    const [customer_address,setCustomerAddress] = useState('')
    const [service_request_charge,setRequestCharge] = useState('')
    const [service_request_type, setRequestType] = useState('')
    const [customer_email, setCustomerEmail] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccces] = useState('')
    const [error, setError] = useState('')
    const [quantity, setQuantity] = useState('')
    
    // GET SERVICE
    const fetchServiceRequest = async () => {
        try {
            const serviceTypes = await  axios.get('http://139.162.134.202:8000/api/service-request/get-service-request-types')
            setsServiceRequestTypes(serviceTypes.data.payload)
            console.log('service type', serviceTypes)
        } catch (error) {
            console.log('fetch type error', error)
        }
    }
    const getServiceCharges = (id)=> {
        setRequestType(id)
        const currentType = serviceRequestTypes.find( type => type.service_id === id)
        setServiceRequestCharges(currentType.service_delivery_charges)
        console.log('id', id, 'charges', currentType)
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setIsLoading(true)
        setError(null)
        setSuccces(null)

        const data = {
            "customer_name": customer_name,
            "customer_phone_number": customer_phone_number,
            "customer_address": customer_address,
            "service_request_charge": service_request_charge,
            "service_request_type": service_request_type,
            "customer_email":customer_email,
            'quantity':quantity
        }

       try {
            const response = await axios.post('http://139.162.134.202:8000/api/service-request/post-service-request',data )
            if(response) {
                setIsLoading(false)
                setSuccces("Request has been received successfully. Thank You.")
                console.log("Data", response)
                try {
                    const response = await axios.get(`http://139.162.134.202:8000/api/service-request/get-service-requests-by-phone-number/${customer_phone_number}`) 
                    localStorage.setItem('user_requests', JSON.stringify(response.data.payload))
                } catch (error) {
                  console.log('error', error)  
                }

                // setCustomerName('')
                // setCustomerPhoneNumber('')
                // setCustomerAddress('')
                // setRequestCharge('') 
                // setRequestType('')  
                // setCustomerEmail('')
                // setQuantity('')
            }

       } catch (error) {
            setIsLoading(false)
            setError('An Error occured try again', error   )
       }

    }
   //  MAKE API CALL HERE
   useEffect( () => {
        fetchServiceRequest()
   }, [])  
    return (
        <div id="service_request_wrapper">
            <div className="request_service py-5">
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-11 col-md-10 col-lg-9">
                        <h2 className="pb-3">SERVICE REQUEST</h2>
                    </div>
                    <div className="col-11 col-sm-11 col-md-10 col-lg-9">
                        <form onSubmit={ handleSubmit }>
                            <div className="form-row">
                               <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="customer-name">Full Name </label>
                                        <input required type="text" name="customer-name" id="customer_name" 
                                            placeholder="Enter your full name" className="form-control"
                                            onChange={e => setCustomerName(e.target.value)} />
                                    </div>
                               </div>
                               <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="customer_phone_number"> Phone Number </label>
                                        <input required type="tel" placeholder="Enter your phone number" 
                                            name="customer_phone_number" id="customer_phone_number" className="form-control" 
                                            onChange={e => setCustomerPhoneNumber(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="customer_email"> Email Address </label>
                                        <input required type="email" placeholder="Enter your email address" 
                                            name="customer_email" id="customer_email" className="form-control" 
                                            onChange={e => setCustomerEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="customer_address">Address/Closest Landmark/GPS Location </label>
                                        <input required type="address" 
                                            placeholder="Enter your address" name="customer_address" 
                                            id="customer_address" className="form-control"
                                            onChange={e => setCustomerAddress(e.target.value)} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="service_request_type">Service Type </label>
                                        <select  className="form-control" id="serivice_request_type"
                                            onChange={e => { getServiceCharges(e.target.value)}} required='required'>
                                            <option value="" className="text-dark">Select Service Type</option>
                                            <>
                                                {serviceRequestTypes.map( type => ( <option key={type.service_id} value={type.service_id}>{type.service_name}</option>))}
                                            </>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="service_request_charge">Preferred Time</label>
                                        <select  className="form-control" name="serivice_request_charge"
                                            onChange={e => setRequestCharge(e.target.value)} required="required" >
                                            <option value='' className="text-dark">Select Preferred time</option>
                                            <>
                                                {serviceRequestCharges.map( type => ( <option key={type.service_delivery_charge_id} value={type.service_delivery_charge_id}>{type.service_delivery_charge_name} {`(GH₵:${type.service_delivery_charge})`}</option>))}
                                            </>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="units"> Number of Airconditioner Units </label>
                                        <input required type="number" placeholder="eg 2" title="input must be a number"
                                            name="units" id="units" className="form-control" min="0"
                                            onChange={e => setQuantity(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            {success && <div class="alert alert-success py-2" role="alert">
                                <p>{success}</p>
                            </div>}
                            {error && <div class="alert alert-danger py-2" role="alert">
                                <p>{error}</p>
                            </div>}
                            <div className="modal-footer">
                                {!isLoading &&  <button  type="submit" className="btn btn-primary submit">Submit</button>}
                                {isLoading && <button className="btn btn-primary submit" type="button" disabled>Loading...
                                </button>}
                            </div>
                        </form>  
                    </div>
                </div>
            </div>
        </div>
    )
}
