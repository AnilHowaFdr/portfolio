const ServiceTools = ({ src, heading, detail }) => {
  return (
    <div className="mx-3 md:mx-0 border-2 border-primary px-3 pt-7 pb-9 hover:animate-wiggle text-white bg-secondary rounded-xl flex flex-col items-center gap-5">
      <img className="w-12 h-12 bg-white rounded-lg" src={src} alt="service" />
      <h3 className="text-xl font-bold text-center text-primary">{heading}</h3>
      <p className="w-auto font-primary font-medium leading-8 text-base text-center text-white">
        {detail}
      </p>
    </div>
  );
};

export default ServiceTools;
