import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Api from "../../common/Api";

export interface SignupInput {
  name: string;
  email: string;
  password: number;
}

export const SignUpForm: React.FC = () => {
  const { register, handleSubmit } = useForm<SignupInput>();
  const history = useHistory();

  const onSubmit = async (data: SignupInput) => {
    await Api.signup(data);
    history.push("/payment");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register("name", { required: true, minLength: 1 })} />
      <label>Email</label>
      <input {...register("email", { required: true, minLength: 1 })} />
      <label>Password</label>
      <input {...register("password", { required: true, minLength: 5 })} />
      <input type="submit" />
    </form>
  );
};
