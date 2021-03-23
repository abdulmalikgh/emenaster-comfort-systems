import React from 'react'

export default function RequestService() {
    return (
        <div className="request_service">
            <form>
                    <div class="form-group">
                        <label for="customer-name">Full Name </label>
                        <input required type="text" name="customer-name" id="customer_name" placeholder="Enter your full name" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="customer_phone_number"> Phone Number </label>
                        <input required type="tel" placeholder="Enter your phone number" name="customer_phone_number" id="customer_phone_number" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="customer_address">Enter Your Address </label>
                        <input required type="address" placeholder="Enter your address" name="customer_address" id="customer_address" class="form-control" />
                    </div>
                     <div class="form-group">
                        <label for="closest_landmark"> Closest Landark </label>
                        <input required placeholder="Enter closest landmark" type="text" name="closest_landmark" id="closest_landmark" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="service_request_type">Service Request Type </label>
                        <select required class="form-control" name="serivice_request_type">
                            <option> </option>
                        </select>
                    </div>
                     <div class="form-group">
                        <label for="service_request_charge">Service Request Charge</label>
                        <select required class="form-control" name="serivice_request_charge">
                            <option> </option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-primary submit">Submit</button>
                    </div>
                </form>   
        </div>
    )
}
