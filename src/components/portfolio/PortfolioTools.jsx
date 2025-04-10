import { Link } from "react-router-dom";

const PortfolioTools = ({ src, src1, src2, title }) => {
  return (
    <div className="w-auto px-2 relative ">
      <div className="border bg-gray-200 border-primary rounded-md p-5 dark:border-white">
        <div className=" ">
          <img className="w-full h-[250px]" src={src} alt="img not found" />
          <h3 className="pt-3 text-2xl font-semibold font-primary  text-secondary">
            {title}
          </h3>
          <p className="pt-5 text-base m-auto pb-10 font-medium text-secondary font-primary">
            Responsive design making with HTML, CSS(tailwind css), React, Redux.
          </p>
          <div className="flex justify-evenly gap-5">
            <Link
              to={src1}
              className="px-8 py-4 border border-primary rounded-3xl dark:text-white text-sm font-semibold font-primary text-secondary bg-primary"
            >
              Live View
            </Link>
            <Link
              to={src2}
              className="px-8 py-4 border border-primary rounded-3xl  text-sm font-semibold font-primary text-secondary hover:border-none hover:bg-primary hover:text-white"
            >
              Code with github
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTools;
