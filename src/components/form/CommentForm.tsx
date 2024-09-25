import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  website: string;
  comment: string;
};

const CommentForm = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Perform any additional actions before or after submitting data
    console.log(data);

    // Show a success toast
    toast.success("Comment submitted successfully!");

    // Reset the form to default values
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12">
          <div className="form-input-group">
            <input
              {...register("name")}
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-input-group">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-input-group">
            <input
              {...register("website")}
              type="text"
              placeholder="Website"
              required
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-12">
          <div className="form-input-group">
            <textarea {...register("comment")} placeholder="Comment" required />
          </div>
        </div>
        <div className="col-lg-12">
          <button
            className="blog-btn def-btn btn-hover def-btn-8"
            type="submit"
          >
            <span>SUBMIT NOW</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
