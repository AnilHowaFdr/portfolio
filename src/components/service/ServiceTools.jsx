const ServiceTools = ({ src, heading, detail }) => {
  return (
    <div className="border-4 border-primary px-6 pt-7 pb-9 hover:animate-wiggle text-white bg-secondary rounded-xl w-1/3 flex flex-col items-center gap-5 hover:">
      <img className="w-12 h-12 bg-white rounded-lg" src={src} alt="service" />
      <h3 className="text-xl font-bold text-primary">{heading}</h3>
      <p className="w-auto font-primary font-medium leading-8 text-base text-center text-white">
        {detail}
      </p>
    </div>
  );
};

export default ServiceTools;
