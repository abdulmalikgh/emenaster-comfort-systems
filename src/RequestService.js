import {useEffect, useState} from 'react'
import axios from 'axios'

export default function RequestService() {
    const [serviceRequestTypes, setsServiceRequestTypes] = useState([])
    const [serviceRequestCharges, setServiceRequestCharges] = useState([])
    const [fetchError, setFetchError] = useState(false)
    const [fetchSuccess, setFetchSuccess] = useState(false)

    // FORM INPUTS
    const [customer_name, setCustomerName] = useState('')
    const [customer_phone_number, setCustomerPhoneNumber] = useState([''])
    const [customer_address,setCustomerAddress] = useState('')
    const [closest_landmark,setClosestLandmark] = useState('')
    const [service_request_charge,setRequestCharge] = useState('')
    const [service_request_type, setCoustomerRequestType] = useState('')
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
                        <form>
                            <div className="form-group">
                                <label htmlFor="customer-name">Full Name </label>
                                <input required type="text" name="customer-name" id="customer_name" 
                                placeholder="Enter your full name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="customer_phone_number"> Phone Number </label>
                                <input required type="tel" placeholder="Enter your phone number" 
                                name="customer_phone_number" id="customer_phone_number" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="customer_address">Enter Your Address </label>
                                <input required type="address" 
                                placeholder="Enter your address" name="customer_address" 
                                id="customer_address" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="closest_landmark"> Closest Landark </label>
                                <input required placeholder="Enter closest landmark" 
                                type="text" name="closest_landmark" id="closest_landmark" 
                                className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="service_request_type">Select Service Request Type </label>
                                <select required className="form-control" id="serivice_request_type">
                                    {serviceRequestTypes.map( type => ( <option key={type.service_id} value={type.service_id}>{type.service_name}</option>))}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="service_request_charge">Select Service Request Charge</label>
                                <select required className="form-control" name="serivice_request_charge">
                                {serviceRequestCharges.map( type => ( <option key={type.service_delivery_charge_id} value={type.service_delivery_charge_id}>{type.service_delivery_charge_name} {`(GH₵:${type.service_delivery_charge})`}</option>))}
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary submit">Submit</button>
                            </div>
                        </form>  
                    </div>
                </div>
            </div>
        </div>
    )
}
