import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm2 = () => {
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
      className="row g-4 contact-11-form fade_bottom"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="col-sm-6">
        <input
          {...register("firstName")}
          type="text"
          placeholder="First Name"
          required
        />
      </div>
      <div className="col-sm-6">
        <input {...register("lastName")} type="text" placeholder="Last Name" />
      </div>
      <div className="col-sm-6">
        <input
          {...register("email")}
          type="email"
          placeholder="Email Address"
          required
        />
      </div>
      <div className="col-sm-6">
        <input
          {...register("phone")}
          type="tel"
          placeholder="Phone Number"
          required
        />
      </div>
      <div className="col-12">
        <textarea
          placeholder="Message"
          rows={4}
          {...register("message")}
          required
        ></textarea>
      </div>
      <div className="col-12">
        <button className="def-btn btn-hover def-btn-11">
          <span className="dot"></span>
          <span className="txt">Submit Now</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm2;
