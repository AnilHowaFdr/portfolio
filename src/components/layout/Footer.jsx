const Footer = () => {
  return (
    <footer className="py-20">
      <div className="container">
        <div className="flex flex-col items-center w-full m-auto justify-center gap-3 ">
          <h2 className="uppercase text-3xl pb-4 font-semibold font-primary text-secondary">
            Get in touch
          </h2>
          <input
            required
            type="text"
            placeholder="Name"
            className="text-secondary font-medium font-primary text-lg border rounded-lg w-1/2 px-2 py-3"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="text-secondary font-medium font-primary text-lg border rounded-lg w-1/2 px-2 py-3"
          />
          <textarea
            required
            name=""
            id=""
            placeholder="Message"
            className="text-secondary font-medium font-primary text-lg border rounded-lg w-1/2 px-2 h-40 py-3"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
