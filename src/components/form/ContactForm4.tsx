import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  website: string;
  message: string;
};
const ContactForm4 = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Form submitted successfully!");

    // Reset the form to default values
    reset();
  };
  return (
    <form
      className="pc-contact-wrapper-input-fields"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        {...register("name")}
        type="text"
        placeholder="Your Name"
        required
      />
      <input
        {...register("email")}
        type="email"
        placeholder="Your Email"
        required
      />
      <input
        {...register("website")}
        type="text"
        placeholder="Your Website"
        required
      />
      <textarea
        {...register("message")}
        placeholder="Leave Message"
        required
      ></textarea>
      <button type="submit" className="def-btn btn-hover def-btnrd">
        <span className="dot"></span>{" "}
        <span className="txt">
          Send Message <i className="fa-solid fa-arrow-right-long"></i>
        </span>
      </button>
    </form>
  );
};

export default ContactForm4;
