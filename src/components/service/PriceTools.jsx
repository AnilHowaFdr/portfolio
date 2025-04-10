const PriceTools = ({ heading, design, price }) => {
  return (
    <div className="mx-2 px-6 pt-7 pb-10 text-secondary bg-linear-to-b from-primary to-white-slate-400 rounded-xl flex flex-col items-center gap-5 border border-[#DBD3D3] dark:bg-white">
      <h3 className="text-4xl text-secondary font-bold">{heading}</h3>
      <p className="text-5xl text-secondary font-bold text-center">{price}</p>
      <p className="text-2xl text-secondary font-bold text-center">{design}</p>
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
  );
};

export default PriceTools;
