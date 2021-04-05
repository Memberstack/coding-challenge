import { PayPalButtons as Buttons } from "@paypal/react-paypal-js";
import { PaymentInput} from './index'

import {
  CreateOrderActions,
  OnApproveData,
  OnApproveActions,
} from "@paypal/paypal-js/types/components/buttons";

interface PaypalButtonsProps {
  onConfirm: (data: PaymentInput) => any;
  value: string;
}

export const PaypalButtons: React.FC<PaypalButtonsProps> = ({
  value,
  onConfirm,
}) => {
  const onCreate = (data: any, actions: CreateOrderActions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value,
          }
        }
      ]
    });
  };

  const onApprove = (
    data: OnApproveData,
    actions: any /*OnApproveActions*/
  ) => {
    return actions.order.get().then(function () {
      const button = document && document.querySelector("#confirm-button");
      if (!button) return;

      // TODO no time :(
      button.addEventListener("click", function () {
        return actions.order.capture().then(onConfirm);
      });
    });
  };

  return (
    <Buttons
      disabled={!value}
      style={{ layout: "vertical" }}
      createOrder={onCreate}
      onApprove={onApprove}
    />
  );
};
