import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Payment/Payment.css'
import Card from './Card2.json'
import Successfull from '../Payment/Successfull.json'
import Lottie from 'lottie-react'

const Payment = () => {
    const [paymentData, setPaymentData] = useState({
        fullName: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        amount: '',
        paymentMethod: 'card', // Default payment method
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData({ ...paymentData, [name]: value });
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
       
        await new Promise(resolve => setTimeout(resolve, 300));
        console.log(paymentData);
        setIsSubmitting(false);

        setShowSuccess(true);
        setTimeout(() => {
            navigate('/receipt', {
                state: { cardHolderName: paymentData.fullName, amount: "90,200" }
            }
            );
        }, 1350);

    };

    return (
        <div className={`pay-container ${showSuccess ? 'dim-background' : ''}`}>
            <div>
            <Lottie
                animationData={Card}
                loop={true}
                style={{ width: "600px", height: "600px"}}/>
            </div>
            <div className="payment-container">
            <h1 className="text-center my-3 h1-ubuntu">Payment Page</h1>
            <div className="payment-box">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Name on Card</label>
                        <input type="text" className="form-control" id="fullName" name="fullName" value={paymentData.fullName} onChange={handleChange} placeholder="Name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="amount" className="form-label">Amount</label>
                        <input type="text" className="form-control" id="amount" name="amount" value={"90,200"} onChange={handleChange} placeholder="0.00" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label d-block">Payment Method</label>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="paymentMethod" id="paymentMethodCard" value="card" checked={paymentData.paymentMethod === 'card'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="paymentMethodCard">
                                Card Payment
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="paymentMethod" id="paymentMethodCOD" value="cod" checked={paymentData.paymentMethod === 'cod'} onChange={handleChange} />
                            <label className="form-check-label" htmlFor="paymentMethodCOD">
                                UPI
                            </label>
                        </div>
                    </div>
                    {paymentData.paymentMethod === 'card' && (
                        <>
                            <div className="mb-3">
                                <label htmlFor="cardNumber" className="form-label">Card Number</label>
                                <input type="text" className="form-control" id="cardNumber" name="cardNumber" value={paymentData.cardNumber} onChange={handleChange} maxLength={16} placeholder="1234 5678 9123 4567" required />
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                                    <input type="text" className="form-control" id="expiryDate" name="expiryDate" value={paymentData.expiryDate} onChange={handleChange} placeholder="MM/YY" pattern="\d{2}/\d{2}" required />
                                </div>
                                <div className="col">
                                    <label htmlFor="cvv" className="form-label">CVV</label>
                                    <input type="text" className="form-control" id="cvv" name="cvv" value={paymentData.cvv} onChange={handleChange} maxLength={3} placeholder="123" required />
                                </div>
                            </div>
                        </>
                    )}
                    {paymentData.paymentMethod === 'cod' && (
                            <div className="mb-3">
                                <label htmlFor="upiId" className="form-label">UPI ID</label>
                                <input type="text" className="form-control" id="upiId" name="upiId" value={paymentData.upiId} onChange={handleChange} placeholder="example@upi" required />
                            </div>
                        )}
                    <center>
                        <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={isSubmitting}
                        // style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >Proceed to Pay
                        </button>
                    </center>
                </form>
            </div>
            </div>
            {showSuccess && (
                <div className="success-overlay">
                    <Lottie
                        animationData={Successfull}
                        style={{ width: "800px", height: "800px" }}
                    />
                </div>
            )}
        </div>
    );
};

export default Payment;
