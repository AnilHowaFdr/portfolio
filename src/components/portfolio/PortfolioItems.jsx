import { Link } from "react-router-dom";
import PortfolioTools from "./PortfolioTools";

const PortfolioItems = () => {
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="container px-4 lg:px-8 cursor-pointer">
        <h2 className="Heading pb-3 border-b-2 border-secondary dark:border-white border-dashed w-fit m-auto text-center ">
          Projects ShowCase
        </h2>
        <p className="w-auto lg:w-[800px] pt-10 text-center m-auto font-primary font-medium leading-8 text-lg text-balance dark:text-white text-secondary">
          Some of my Projects are showcased below for your review. You can rely
          on me!!!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-20 ">
          <PortfolioTools
            title="E-commerce Website"
            src="/portfolio1.png"
            src1="https://e-commerce-website-farny-with-react.vercel.app/"
            src2="https://github.com/AnilHowaFdr/E-Commerce-Website-Farny-with-React-.git"
          />
          <PortfolioTools
            title="Agency Website"
            src="/portfolio2.png"
            src1="https://e-commerce-website-farny-with-react.vercel.app/"
            src2="https://github.com/AnilHowaFdr/E-Commerce-Website-Farny-with-React-.git"
          />
          <PortfolioTools
            title="Chatting Application"
            src="/portfolio4.png"
            src1="https://e-commerce-website-farny-with-react.vercel.app/"
            src2="https://github.com/AnilHowaFdr/E-Commerce-Website-Farny-with-React-.git"
          />
        </div>
        <div className="mt-8  py-3 px-6 w-fit font-primary text-lg transition-all text-white cursor-pointer m-auto bg-primary">
          <Link to="/portfolio">View More</Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioItems;
