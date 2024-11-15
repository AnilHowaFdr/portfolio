import { FaChevronLeft } from "react-icons/fa";
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-[-50px]  z-10 w-16 h-16 rounded-full bg-primary flex justify-center items-center text-white text-xl cursor-pointer"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

export default PrevArrow;
