import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51IxweWSF1neUZ90vaWumpciop0BhIafrWUji6VZDLqzaaGheGWJcVsk21owUJB7Rr8657X8nb5syig4ikUyG4KcG00QLCExTNR');

const Checkout = ({ appointment }) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
        </Elements>
    );
};

export default Checkout;