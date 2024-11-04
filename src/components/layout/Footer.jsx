const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex flex-col items-center w-full m-auto justify-center gap-3 ">
          <h2 className="uppercase text-4xl font-semibold font-primary text-secondary">
            Get in touch
          </h2>
          <input
            type="text"
            placeholder="Name"
            className="text-secondary font-medium font-primary text-xl border rounded-lg w-1/2 px-2 py-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="text-secondary font-medium font-primary text-xl border rounded-lg w-1/2 px-2 py-3"
          />
          <input
            type="text"
            placeholder="Message"
            textarea=""
            className="text-secondary font-medium font-primary text-xl border rounded-lg w-1/2 px-2 h-40 py-3"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
