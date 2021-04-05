import Stripe from 'stripe';
const stripe = new Stripe('sk_test_51IK9JGGRjPUOLc3s0hT3LDVoIYeswPB8JaYB3dGNqq30trQLu6fxzU63Enjk2KAPri5XpYPRW0aEIty1JtiUOOwM009yCZKTDZ', {
  apiVersion: '2020-08-27',
});

interface CreatePaymantParams {
  token: string
  value: number
}

const createPaymant = async ({ token, value }:CreatePaymantParams) => {
  return await stripe.paymentIntents.create({
    amount: value,
    currency: 'usd',
    payment_method: token,
    payment_method_types: ['card']
  });
};

export default {
  createPaymant
}