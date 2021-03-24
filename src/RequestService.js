import {useEffect, useState} from 'react'
import axios from 'axios'

export default function RequestService() {
    const [serviceRequestTypes, setsServiceRequestTypes] = useState([])
    const [serviceRequestCharges, setServiceRequestCharges] = useState([])

    // FORM INPUTS
    const [customer_name, setCustomerName] = useState('')
    const [customer_phone_number, setCustomerPhoneNumber] = useState('')
    const [customer_address,setCustomerAddress] = useState('')
    const [closest_landmark,setClosestLandmark] = useState('')
    const [service_request_charge,setRequestCharge] = useState('')
    const [service_request_type, setRequestType] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccces] = useState('')
    const [error, setError] = useState('')
    
    // GET SERVICE
    const fetchServiceRequest = async () => {
        try {
            const serviceTypes = await  axios.get('http://139.162.134.202:8000/api/service-request/get-service-request-types')
            const serviceCharges = await axios.get('http://139.162.134.202:8000/api/service-request/get-service-delivery-charges')
            setServiceRequestCharges(serviceCharges.data.payload)
            setsServiceRequestTypes(serviceTypes.data.payload)
            
        } catch (error) {
            console.log('fetch type error', error)
        }
    }
    
    const handleSubmit = async(e)=>{
        e.preventDefault()
        setIsLoading(true)
        const data = {
            "customer_name": customer_name,
            "customer_phone_number": customer_phone_number,
            "customer_address": customer_address,
            "closest_landmark": closest_landmark,
            "service_request_charge": service_request_charge,
            "service_request_type": service_request_type
        }
        console.log('data', data)

       try {
            const response = await axios.post('http://139.162.134.202:8000/api/service-request/post-service-request',data )
            setIsLoading(false)
            setSuccces(response.data.message)

            // reset form inputs
            setCustomerName('')
            setCustomerPhoneNumber('')
            setCustomerAddress('')
            setClosestLandmark('')
            setRequestCharge('') 
            setRequestCharge('')  

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
                            <div className="form-group">
                                <label htmlFor="customer-name">Full Name </label>
                                <input required type="text" name="customer-name" id="customer_name" 
                                    placeholder="Enter your full name" className="form-control"
                                    onChange={e => setCustomerName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="customer_phone_number"> Phone Number </label>
                                <input required type="tel" placeholder="Enter your phone number" 
                                    name="customer_phone_number" id="customer_phone_number" className="form-control" 
                                    onChange={e => setCustomerPhoneNumber(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="customer_address">Enter Your Address </label>
                                <input required type="address" 
                                    placeholder="Enter your address" name="customer_address" 
                                    id="customer_address" className="form-control"
                                    onChange={e => setCustomerAddress(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="closest_landmark"> Closest Landark </label>
                                <input required placeholder="Enter closest landmark" 
                                    type="text" name="closest_landmark" id="closest_landmark" 
                                    className="form-control" 
                                    onChange={e => setClosestLandmark(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="service_request_type">Service Request Type </label>
                                <select  className="form-control" id="serivice_request_type"
                                    onChange={e => setRequestType(e.target.value)} required='required'>
                                    <option value="">Select Service Type</option>
                                    <>
                                        {serviceRequestTypes.map( type => ( <option key={type.service_id} value={type.service_id}>{type.service_name}</option>))}
                                    </>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="service_request_charge">Service Request Charge</label>
                                <select className="form-control" name="serivice_request_charge"
                                    onChange={e => setRequestCharge(e.target.value)} required="required" >
                                    <option value=''>Select Service Request Charge</option>
                                    <>
                                        {serviceRequestCharges.map( type => ( <option key={type.service_delivery_charge_id} value={type.service_delivery_charge_id}>{type.service_delivery_charge_name} {`(GH₵:${type.service_delivery_charge})`}</option>))}
                                    </>
                                </select>
                            </div>
                            {success && <div class="alert alert-success" role="alert">
                                {success}
                            </div>}
                            {error && <div class="alert alert-alert" role="alert">
                                {error}
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
