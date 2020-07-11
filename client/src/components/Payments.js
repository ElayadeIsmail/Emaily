import React from "react";
import StripCheckout from "react-stripe-checkout";
import * as actions from "../redux/actions";
import { connect } from "react-redux";

const Payments = ({ handleToken }) => {
  return (
    <StripCheckout
      name='Emaily'
      description='$5 For 5 email credits'
      amount={500}
      token={(token) => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className='btn'>Add Credits</button>
    </StripCheckout>
  );
};

console.log(actions);

export default connect(null, actions)(Payments);
