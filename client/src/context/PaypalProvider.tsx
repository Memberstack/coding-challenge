import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PaypalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
};
