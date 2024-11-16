import { FaQuoteLeft, FaStar } from "react-icons/fa";
const Testimonialtools = ({ detail, title, src }) => {
  return (
    <div className=" shadow-lg rounded-lg p-6 px-10 py-8 mx-2 mb-4 bg-third border-4 border-primary rounded-tl-sm rounded-tr-3xl rounded-bl-3xl rounded-br-sm">
      <div className="flex justify-between items-start">
        <FaQuoteLeft className="text-xl lg:text-3xl text-secondary" />
        <ul className="flex gap-1 items-center text-lg lg:text-2xl text-secondary">
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
      <p className="pb-5 pt-5 font-medium text-center text-base lg:text-lg text-gray-800 font-primary">
        {detail}
      </p>
      <div>
        <img
          className="rounded-full w-24 h-24 lg:w-32 lg:h-32 object-cover border-2 border-third shadow-xl"
          src={src}
          alt="image not found"
        />
        <h3 className="pt-3 text-base lg:text-xl font-semibold font-primary text-secondary">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Testimonialtools;
