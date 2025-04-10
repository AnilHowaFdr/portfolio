import ServiceTools from "./ServiceTools";

const ServiceItems = () => {
  return (
    <section className="py-12 dark:bg-gray-950">
      <div className="container px-4 lg:px-8">
        <h2 className="Heading pb-3 border-b-2 dark:text-white border-secondary dark:border-white border-dashed w-fit m-auto text-center ">
          Service
        </h2>
        <p className="pt-10 w-auto px-3 text-base md:text-lg text-center text-balance font-medium dark:text-white text-secondary font-primary">
          Here is an overview of my services. Choose me for your project to
          experience quality results and dedicated support.
        </p>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          <ServiceTools
            src="/web design.png"
            heading="UI/UX Research"
            detail="I am expert to convert from any design files to HTML. When you
              provide a design, I will take full responsibility for delivering my
              best effort to complete your project to the highest standard."
          />
          <ServiceTools
            src="/responsive2.png"
            heading="Responsive Design"
            detail="I deliver user-friendly websites optimized for all devices.I hope my
              work will meet your expectations and you can confidently share
              any design with me, knowing I'll bring it to life seamlessly."
          />
          <ServiceTools
            src="/update.png"
            heading="Performance Enhancement & Update"
            detail="I'm always here to listen to your challenges. If you encounter any
              issues, feel free to reach out I'll do my best to provide a
              straightforward solution. Earning your trust is my top priority."
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
