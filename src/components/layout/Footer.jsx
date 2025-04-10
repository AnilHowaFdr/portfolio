import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Footer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/bllynxjb", userInfo);
      toast.success("Your message has been sent!");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <footer className="py-32 px-2 dark:bg-gray-950 ">
      <div className="container px-4 lg:px-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          // action="https://getform.io/f/bllynxjb"
          // method="POST"
          className="flex flex-col items-center w-full m-auto justify-center gap-3 "
        >
          <h2 className="uppercase text-xl md:text-2xl lg:text-3xl pb-4 font-semibold font-primary dark:text-white text-secondary">
            Get in touch
          </h2>
          <input
            {...register("name", { required: true })}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            className="w-full text-secondary font-medium font-primary text-base lg:text-lg border rounded-lg sm:w-1/2 px-2 py-3 dark:text-gray-200"
          />
          {errors.name && <span>Name is required</span>}

          <input
            {...register("email", { required: true })}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            email="Email"
            className="w-full text-secondary font-medium font-primary text-base lg:text-lg border rounded-lg sm:w-1/2 px-2 py-3 dark:text-gray-200"
          />
          {errors.email && <span>Email is required</span>}
          <textarea
            {...register("message", { required: true })}
            placeholder="Your Message ..."
            name="message"
            message="Message"
            className="w-full text-secondary font-medium font-primary text-base lg:text-lg border rounded-lg sm:w-1/2 px-2 h-40 py-3 dark:text-gray-200"
          />
          {errors.message && <span>Message is required</span>}
          <button
            type="submit"
            className="mt-5 py-3 px-6 font-primary text-xl text-white cursor-pointer bg-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
