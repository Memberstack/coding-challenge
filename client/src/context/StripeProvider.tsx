import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripe = loadStripe("pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG");

const StripeContext = React.createContext({ stripe });

export const useStripeContext = () => {
  return React.useContext(StripeContext);
};

export const StripeProvider = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <Elements stripe={stripe}>
      <StripeContext.Provider value={{ stripe }}>
        {children}
      </StripeContext.Provider>
    </Elements>
  );
};
