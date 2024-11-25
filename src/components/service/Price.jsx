import PriceTools from "./PriceTools";

const Price = () => {
  return (
    <section className="py-20 dark:bg-gray-950 dark:text-white">
      <div className="container px-4 lg:px-8">
        <h2 className="Heading pb-3 border-b-4 border-secondary dark:border-white border-dashed w-fit m-auto text-center ">
          Price
        </h2>
        <p className="px-2 w-auto lg:w-[700px] dark:text-white pt-10 text-center text-balance m-auto font-primary font-medium leading-8 text-lg text-secondary">
          For your review, I have outlined all my service packages, each
          designed to provide excellent value for your investment. I offer a
          100% money-back guarantee until you are fully satisfied, and I also
          welcome custom offers!
        </p>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-10">
          <PriceTools heading="Basic" design="1 page Design" price="15$" />
          <PriceTools heading="Standard" design="2 page Design" price="30$" />
          <PriceTools heading="Advance" design="5 page Design" price="70$" />
        </div>
      </div>
    </section>
  );
};

export default Price;
