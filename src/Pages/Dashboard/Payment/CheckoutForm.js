import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react'
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';


const CheckoutForm = ({ appointment }) => {
    const { _id, price, patientName } = appointment
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState(false)
    const [processing, setProcessing] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'applicatIon/json'
            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))

    }, [price])

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable   
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        setProcessing(true)
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message)
            setSuccess(false)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('')

        }
        // payment intent confirming payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: user.email,
                        address: {
                            line1: '510 Townsend St',
                            postal_code: '98140',
                            city: 'San Francisco',
                            state: 'CA',
                            country: 'US',
                        },
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message)
            setSuccess(false)
            setProcessing(false)

        } else {
            setError('');
            console.log("paymentIntent", paymentIntent);
            setSuccess(true)
            setProcessing(false)

            //save to database
            const url = `http://localhost:5000/appointments/${_id}`
            const payment = {
                amount: paymentIntent.amount,
                last4: paymentMethod.card.last4,
                createdAt: paymentIntent.created,
                transaction: paymentIntent.client_secret.split('_secret')[0]
            }
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => console.log(data))

        }
    };

    return (
        <>
            {
                error && <h4 style={{ color: 'red' }}>{error}</h4>
            }
            {
                success && <h4 style={{ color: 'green' }}> your payment processed successfully </h4>
            }
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                {
                    processing
                        ?
                        <CircularProgress></CircularProgress>
                        :
                        <button type="submit" disabled={!stripe || success}>
                            Pay ${price}
                        </button>
                }
            </form>
        </>

    );
};
export default CheckoutForm;
