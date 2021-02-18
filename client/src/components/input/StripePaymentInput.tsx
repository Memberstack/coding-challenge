import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

export const StripePaymentInput = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleClick = async () => {
    if (elements === null || stripe === null) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement === null) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    // Handle payment with the returned payment method id.
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
      <button onClick={handleClick}>Pay</button>
    </div>
  );
};
