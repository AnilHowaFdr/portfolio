const WorkingProcessItems = ({ src, heading, detail }) => {
  return (
    <div className="mx-2 md:mx-0 px-3 pt-7 pb-9 hover:animate-wiggle text-white bg-secondary rounded-xl flex flex-col items-center gap-5 border-4 border-primary">
      <img className="w-20 h-16 bg-white rounded-lg" src={src} alt="service" />
      <h3 className="text-2xl text-primary font-bold">{heading}</h3>
      <p className="w-auto font-primary font-medium leading-8 text-sm sm:text-base text-center text-white">
        {detail}
      </p>
    </div>
  );
};

export default WorkingProcessItems;
