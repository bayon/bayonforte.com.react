import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PayPage from "./PayPage";

const stripePromise = loadStripe("pk_test_7aHY16H2I0thccZMQJIDUNpi");

export default function RegisterPage(props) {
  return (
    <React.Fragment>
      <Elements stripe={stripePromise}>
        <PayPage prop={props}/>
      </Elements>
    </React.Fragment>
  );
}
