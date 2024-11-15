import { FaChevronRight } from "react-icons/fa";
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-[-50px] z-10 w-16 h-16 rounded-full bg-primary flex justify-center items-center text-xl cursor-pointer text-white"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

export default NextArrow;
