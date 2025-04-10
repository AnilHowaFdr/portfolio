import { useState } from "react";

const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [messageErr, setMessageErr] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    setNameErr("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
    setMessageErr("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameErr("Name is required");
    } else if (!email) {
      setEmailErr("Email is required");
    } else if (!message) {
      setMessageErr("Message is required");
    } else {
      alert("Submitted Successfully");
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <footer className="py-32 px-2 dark:bg-gray-950">
      <div className="container px-4 lg:px-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full m-auto justify-center gap-3 "
        >
          <h2 className="uppercase text-xl md:text-2xl lg:text-3xl pb-4 font-semibold font-primary dark:text-white text-secondary">
            Get in touch
          </h2>
          <input
            required
            type="text"
            onChange={handleName}
            placeholder="Name"
            className="w-full text-secondary font-medium font-primary text-base lg:text-lg border rounded-lg sm:w-1/2 px-2 py-3"
          />
          <p className="error">{nameErr}</p>
          <input
            required
            type="email"
            placeholder="Email"
            email="Email"
            onChange={handleEmail}
            className="w-full text-secondary font-medium font-primary text-base lg:text-lg border rounded-lg sm:w-1/2 px-2 py-3"
          />
          <p className="error">{emailErr}</p>
          <textarea
            required
            onChange={handleMessage}
            placeholder="Message"
            message="Message"
            className="w-full text-secondary font-medium font-primary text-base lg:text-lg border rounded-lg sm:w-1/2 px-2 h-40 py-3"
          />
          <p className="error">{messageErr}</p>
          <button className="mt-5 py-3 px-6 font-primary text-xl text-white cursor-pointer bg-primary">
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
