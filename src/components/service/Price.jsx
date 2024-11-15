const Price = () => {
  return (
    <section className="py-20 dark:bg-gray-950 dark:text-white">
      <div className="container">
        <h2 className="Heading pb-3 border-b-4 border-secondary dark:border-white border-dashed w-fit m-auto text-center ">
          Price
        </h2>
        <p className="w-auto lg:w-[700px] dark:text-white pt-10 text-center m-auto font-primary font-medium leading-8 text-lg text-secondary">
          For your review, I have outlined all my service packages, each
          designed to provide excellent value for your investment. I offer a
          100% money-back guarantee until you are fully satisfied, and I also
          welcome custom offers!
        </p>
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
          <div className="px-6 pt-7 pb-10 text-secondary bg-gradient-to-b from-primary to-white-slate-400 rounded-xl flex flex-col items-center gap-5 border border-[#DBD3D3] dark:bg-white">
            <h3 className="text-4xl text-secondary font-bold">Basic</h3>
            <p className="text-5xl text-secondary font-bold text-center">15$</p>
            <p className="text-2xl text-secondary font-bold text-center">
              1 Page Design
            </p>
            <p className="text-2xl text-secondary font-bold text-center">
              Responsive
            </p>
            <p className="text-2xl text-secondary font-bold text-center">
              Slider/Scroller
            </p>
            <button className="text-2xl uppercase rounded-xl text-white bg-secondary px-4 py-3 m-auto font-bold text-center">
              Order Now
            </button>
          </div>
          <div className="px-6 pt-7 pb-10 text-secondary bg-gradient-to-b from-primary to-white-slate-400 rounded-xl flex flex-col items-center gap-5 border border-[#DBD3D3] dark:bg-white">
            <h3 className="text-4xl text-secondary font-bold">Basic</h3>
            <p className="text-5xl text-secondary font-bold text-center">30$</p>
            <p className="text-2xl text-secondary font-bold text-center">
              2 Page Design
            </p>
            <p className="text-2xl text-secondary font-bold text-center">
              Responsive
            </p>
            <p className="text-2xl text-secondary font-bold text-center">
              Slider/Scroller
            </p>
            <button className="text-2xl uppercase rounded-xl text-white bg-secondary px-4 py-3 m-auto font-bold text-center">
              Order Now
            </button>
          </div>
          <div className=" dark:bg-white px-6 pt-7 pb-10 text-secondary bg-gradient-to-b from-primary to-white-slate-400 rounded-xl flex flex-col items-center gap-5 border border-[#DBD3D3]">
            <h3 className="text-4xl text-secondary font-bold">Basic</h3>
            <p className="text-5xl text-secondary font-bold text-center">70$</p>
            <p className="text-2xl text-secondary font-bold text-center">
              5 Page Design
            </p>
            <p className="text-2xl text-secondary font-bold text-center">
              Responsive
            </p>
            <p className="text-2xl text-secondary font-bold text-center">
              Slider/Scroller
            </p>
            <button className="text-2xl uppercase rounded-xl text-white bg-secondary px-4 py-3 m-auto font-bold text-center">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
