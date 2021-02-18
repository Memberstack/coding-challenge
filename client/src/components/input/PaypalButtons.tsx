import { PayPalButtons as Buttons } from "@paypal/react-paypal-js";

export const PaypalButtons = () => {
  return (
    <div>
      <Buttons
        style={{ layout: "vertical" }}
        // createOrder={() => {})
        // onApprove={() => {}}
      />
    </div>
  );
};
