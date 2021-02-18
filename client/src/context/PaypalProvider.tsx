import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PaypalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AUI6YjKxhzpZWyPHtD1cw_FIKhPPtwbFxwhnwcAGvn7hKT6FmShUEnATo8jYd6-3cmBxfaqpPQWINKpb",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
};
