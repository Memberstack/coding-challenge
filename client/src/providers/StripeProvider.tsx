import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripe = loadStripe("pk_test_51IK9JGGRjPUOLc3sZp1o41zxFeHcilDYOvwinEjJkh7Tz3Y14IZBprgDYdWwMBCwVHCxJsmaDtZMatUarTgzvNCG00ryh7ux3N");

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
