import { PaypalProvider } from "../../context/PaypalProvider";
import { StripeProvider } from "../../context/StripeProvider";

import { PaypalButtons } from "../input/PaypalButtons";
import { StripePaymentInput } from "../input/StripePaymentInput";

export const PaymentForm = () => {
  return (
    <div>
      <PaypalProvider>
        <PaypalButtons />
      </PaypalProvider>
      <StripeProvider>
        <StripePaymentInput />
      </StripeProvider>
    </div>
  );
};
