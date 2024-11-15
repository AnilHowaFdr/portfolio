import PortfolioTools from "./PortfolioTools";

const PortfolioItems = () => {
  return (
    <section className="py-20">
      <div className="container ">
        <h2 className="Heading pb-3 border-b-4 border-secondary border-dashed w-fit m-auto text-center ">
          Projects ShowCase
        </h2>
        <p className="w-auto lg:w-[800px] pt-10 text-center m-auto font-primary font-medium leading-8 text-lg text-balance dark:text-white text-secondary">
          Some of my Projects are showcased below for your review. You can rely
          on me!!!
        </p>
        <div className="flex gap-5 pt-20 ">
          <PortfolioTools
            src1="https://e-commerce-website-farny-with-react.vercel.app/"
            src2="https://github.com/AnilHowaFdr/E-Commerce-Website-Farny-with-React-.git"
          />
        </div>
      </div>
    </section>
  );
};

export default PortfolioItems;
