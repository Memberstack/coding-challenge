import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PaypalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AR0I0HdPzUqgwNKF6_ftmu7tDYZdHoC9UMOhRVNe2YduBsg3Qea0P8Lqt5YnbPAZbLyNmMmaSmzGeTxT",
      }}
    >
      {children}
    </PayPalScriptProvider>
  );
};
