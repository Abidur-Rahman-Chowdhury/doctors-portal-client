import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(
  'pk_test_51L0hEkDWa8yB2PpaHAuUSDbuArMApWWQkZycDzs7d1jOFm4vd3P4GHcwONSYm6Xuecc6m6uyfRdUO5alUDT9udOb00XOUPSXU3'
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/booking/${id}`;
  const {
    data: appointment,
    isLoading,
    refetch,
  } = useQuery(['booking', id], () =>
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <p className="text-success font-bold">
            Hello {appointment.patientName}
          </p>
          <h2 class="card-title">Pay for {appointment.treatment}</h2>
          <p>
            Your Appointment:
            <span className="text-orange-700 ml-2">
              {appointment.date}
            </span> at {appointment.slot}
          </p>
          <p>Please Pay ${appointment.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;