import { FaQuoteLeft, FaStar } from "react-icons/fa";
const Testimonialtools = ({ detail, title, src }) => {
  return (
    <div className="px-10 py-8 mb-4 bg-third border-4 border-primary rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm w-auto md:w-3/4 m-auto">
      <div className="flex justify-between items-start">
        <FaQuoteLeft className="text-3xl text-secondary" />
        <ul className="flex gap-1 items-center text-2xl text-secondary">
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
          <li>
            <FaStar />
          </li>
        </ul>
      </div>
      <p className="pb-5 pt-5 font-medium text-lg text-gray-800 font-primary">
        {detail}
      </p>
      <div>
        <img
          className="rounded-full w-32 h-32"
          src={src}
          alt="image not found"
        />
        <h3 className="pt-3 text-xl font-semibold font-primary text-secondary">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Testimonialtools;
