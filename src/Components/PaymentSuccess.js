import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
    const navigate = useNavigate()
    const [paymentStatus, setPaymentStatus] = useState(true);
    const success = "https://i.stack.imgur.com/YbIni.png"
    const fail = "https://cdn.pixabay.com/photo/2012/04/16/13/51/sign-36070_640.png"

    const purchaseHandler =()=>{
       navigate("/")
    }
  return (
    <div className='container-fluid '>
        
        <div className="payment-result">
      <div className="payment-status-wrapper">
        <div className="container-lg">
          <div className="row">
            <div className="col-12 col-sm-10 mx-auto">
              <div className="status-wrapper mt-5 mb-5">
                <h3 className="title mb-4">
                  {paymentStatus == true
                    ? "Payment Successful"
                    : "Payment Failed"}
                </h3>

                <div
                  className={`img-wrapper mb-3 ${
                    paymentStatus == true && "payment-success-img"
                  } `}
                >
                  <img
                    src={
                    success
                    }
                  />
                </div>
                {paymentStatus == true ? (
                  <p className="desc mb-3">
                    Your payment is successful
                  </p>
                ) : (
                  <p className="desc mb-3">
                    Your payment is failed, try after sometimes, if the problem
                    still persist{" "}
                    <button className="btn btn-sm btn-link">Contact Us</button>
                  </p>
                )}
                <button className="btn btn-md btn-primary" onClick={purchaseHandler}>
                  {paymentStatus == true ? " Purchase Products" : "Go to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

        
        </div>
  )
}

export default PaymentSuccess