import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import { PaypalProvider } from "../../providers/PaypalProvider";
import { StripeProvider } from "../../providers/StripeProvider";

import { PaypalButtons } from "./PaypalButtons";
import { StripePaymentInput } from "./StripePaymentInput";

import Api from "../../common/Api";

export interface PaymentInput {
  value: string;
  token: string;
  type: string;
}

export const PaymentForm: React.FC = () => {
  const { register, watch } = useForm();
  const [plans, setPlans] = useState([]);
  const selectedPlan = watch("plan");

  useEffect(() => {
    Api.getPlans().then((plans) => {
      setPlans(plans);
    });
  }, []);

  const renderPlans = () => {
    return (
      <select {...register("plan")}>
        {plans.map((plan: any) => {
          return (
            <option key={plan.id} value={plan.paymentOptions[0].amount}>
              {plan.name} - {plan.paymentOptions[0].amount} 
            </option>
          );
        })}
      </select>
    );
  };

  return (
    <div>
      <div>
        <h1>Select a plan</h1>
        {renderPlans()}
      </div>
      <PaypalProvider>
        <h1>Pay via Paypal</h1>
        <PaypalButtons onConfirm={Api.purchase} value={selectedPlan} />
      </PaypalProvider>
      <StripeProvider>
         <h1>Pay via Stripe</h1>
        <StripePaymentInput onConfirm={Api.purchase} value={selectedPlan} />
      </StripeProvider>
    </div>
  );
};
