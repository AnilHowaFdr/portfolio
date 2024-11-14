import { Link } from "react-router-dom";

const PortfolioItems = () => {
  return (
    <section className="py-20">
      <div className="container ">
        <h2 className="Heading pb-3 border-b-4 border-secondary border-dashed w-fit m-auto text-center ">
          Projects ShowCase
        </h2>
        <p className="w-[800px] pt-10 text-center m-auto font-primary font-medium leading-8 text-lg text-balance dark:text-white text-secondary">
          Some of my Projects are showcased below for your review. You can rely
          on me!!!
        </p>
        <div className="flex gap-5 pt-20 ">
          <div className="w-1/3 relative ">
            <div className=" border bg-gray-200 border-primary rounded-md p-5 dark:border-white">
              <div className=" ">
                <img
                  className="w-full"
                  src="/portfolio1.png"
                  alt="img not found"
                />
                <h3 className="pt-3 text-2xl font-semibold font-primary dark:text-white text-secondary">
                  fgfwsfvs
                </h3>
                <p className="pt-5 text-base m-auto pb-10 font-medium dark:text-white text-secondary font-primary">
                  scdfdbgfbvdfcd
                </p>
                <div className="flex justify-evenly gap-5">
                  <Link
                    to="https://e-commerce-website-farny-with-react.vercel.app/"
                    className="px-8 py-4 border border-primary rounded-full dark:text-white text-sm font-semibold font-primary text-secondary bg-primary"
                  >
                    Live View
                  </Link>
                  <Link
                    to="https://github.com/AnilHowaFdr/E-Commerce-Website-Farny-with-React-.git"
                    className="px-8 py-4 border border-primary rounded-full dark:text-white text-sm font-semibold font-primary text-secondary hover:border-none hover:bg-primary"
                  >
                    Code with github
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioItems;
