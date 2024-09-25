import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  email: string;
};

type Props = {
  formStyle: string;
  btnStyle: string;
};

const SubscribeForm = ({ formStyle, btnStyle }: Props) => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Subscription successful!");

    // Reset the form to default values
    reset();
  };

  return (
    <form className={formStyle} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Enter your email address"
        required
      />
      <button type="submit" className={btnStyle}>
        <span className="submit-btn-text">Subscribe</span>{" "}
        <i className="fa-light fa-arrow-up-right"></i>
      </button>
    </form>
  );
};

export default SubscribeForm;
