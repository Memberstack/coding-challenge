import React from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentInput } from "./index";

interface StripePaymentProps {
  onConfirm: (data: PaymentInput) => any;
  value: string;
}

export const StripePaymentInput: React.FC<StripePaymentProps> = ({
  value,
  onConfirm,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleClick = async () => {
    if (elements === null || stripe === null) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if (cardElement === null) return;

    const { paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    const result = await onConfirm({
      value,
      token: (paymentMethod && paymentMethod.id) || "",
      type: "stripe",
    });
    console.log("result", result);
  };

  return (
    <div>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button disabled={!value} onClick={handleClick}>
        Pay
      </button>
    </div>
  );
};
