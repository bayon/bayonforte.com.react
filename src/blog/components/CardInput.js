import { CardElement } from '@stripe/react-stripe-js';
import React from 'react';
const CARD_ELEMENT_OPTIONS ={
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
  }

export default function CardInput() {
    return (
        <div>
             <CardElement options={CARD_ELEMENT_OPTIONS} />
        </div>
    )
}