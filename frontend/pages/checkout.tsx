import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import styles from '../styles/checkout.module.scss'
const CLIENT = {
  sandbox: "sb-uax8o2613586@personal.example.com",
  production: "your client id"
};

const CLIENT_ID =
  process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

let PayPalButton = null;

declare global {
interface Window {
    paypal: any;
}
}

const PaypalButton: React.FC  = ({ isScriptLoaded, isScriptLoadSucceed }: any) => {
  const [showButtons, setShowButtons] = useState(false);
  const [loading, setLoading] = useState(true);
  const [paid, setPaid] = useState(false);

  window.React = React;
  window.ReactDOM = ReactDOM;

  useEffect(() => {
    if (isScriptLoaded && isScriptLoadSucceed) {
      PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
      setLoading(false);
      setShowButtons(true);
    }
  }, [isScriptLoaded, isScriptLoadSucceed]);

  useEffect(() => {
    const scriptJustLoaded = !showButtons && !isScriptLoaded && isScriptLoaded;

    if (scriptJustLoaded) {
      if (isScriptLoadSucceed) {
        PayPalButton = window.paypal.Buttons.driver("react", {
          React,
          ReactDOM
        });
        setLoading(false);
        setShowButtons(true);
      }
    }
  }, [isScriptLoadSucceed, isScriptLoaded, showButtons]);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: +"Mercedes G-Wagon",
          amount: {
            currency_code: "BRL",
            value: 200
          }
        }
      ]
    });
  };

  const onApprove = (data, actions) => {
    actions.order.capture().then(details => {
      const paymentData = {
        payerID: data.payerID,
        orderID: data.orderID
      }; 
      setShowButtons(false)
      setPaid(true)  
    });
  };

  return (
    <div id={styles.checkoutContainer}>
      {showButtons && (
        <div>
          <div>
            <h2>Items: Mercedes G-Wagon</h2>
            <h2>Total checkout Amount $200</h2>
          </div>

          <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </div>
      )}

      {paid && (
        <div id={styles.checkoutContainer}>
          <img
            alt="Mercedes G-Wagon"
            src="https://i.ytimg.com/vi/qBH-_ZsE6Nc/0.jpg"
          />
          <h2>
            Congrats! you just paid for that picture. Work a little harder and
            you'll be able to afford the car itself{" "}
            <span role="img" aria-label="emoji">
              {" "}
              😉
            </span>
          </h2>
        </div>
      )}
    </div>
  );
}

export default scriptLoader(
  `https://www.paypal.com/sdk/js?client-id=AYbvVKPO8hTyKjZzGof_KSyx0jUbhkH_tzslIV2xUSJJfUa8QKmsOOCmfklvvRDfUVnF6zCHWXtsQV8Y`
)(PaypalButton);
