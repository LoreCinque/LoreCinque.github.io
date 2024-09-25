import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
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
    <form className="contact-8-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("fullName")}
        type="text"
        placeholder="Full Name"
        required
      />
      <input
        {...register("email")}
        type="email"
        placeholder="Email Address"
        required
      />
      <input
        {...register("phone")}
        type="tel"
        placeholder="Phone Number"
        required
      />
      <input
        {...register("subject")}
        type="text"
        placeholder="Subject Of Request"
        required
      />
      <textarea
        {...register("message")}
        placeholder="Message"
        rows={4}
        required
      />
      <button className="def-btn btn-hover def-btn-8" type="submit">
        <span className="dot"></span>
        <span className="txt">
          Submit Now <i className="fa-regular fa-arrow-up-right"></i>
        </span>
      </button>
    </form>
  );
};

export default ContactForm;
