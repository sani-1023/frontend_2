import React, { Fragment, useEffect, useRef, useState } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/Metadata";
import { Typography } from "@material-ui/core";

import "./Payment.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import EventIcon from "@material-ui/icons/Event";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import axios from "axios";

const Payment = () => {
  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  const productInfo = JSON.parse(localStorage.getItem("cartItems"));

  const totalPrice = orderInfo.totalPrice;

  console.log("hi",productInfo);
  console.log("hi",orderInfo);

  const payBtn = useRef(null);

 

  const submitHandler = async (e) => {
    e.preventDefault();



  };

  return (
    <Fragment>
      <MetaData title="Payment" />
      <CheckoutSteps activeStep={2} />
      <div className="paymentContainer">
        <form className="paymentForm" onSubmit={(e) => submitHandler(e)}>
          <Typography>Card Info</Typography>
          <div>
            <CreditCardIcon />
            <input className="paymentInput" placeholder="Bank-account"/>
          </div>
          <div>
            <EventIcon />
            <input className="paymentInput" placeholder="Date" />
          </div>
          <div>
            <VpnKeyIcon />
            <input className="paymentInput" placeholder="Secret key" type = "password" />
          </div>

          <input
            type="submit"
            value={`Pay - ${totalPrice}/=`}
            ref={payBtn}
            className="paymentFormBtn"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Payment;
