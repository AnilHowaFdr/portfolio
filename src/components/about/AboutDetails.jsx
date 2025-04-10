const AboutDetails = () => {
  return (
    <section className="py-14 px-2 bg-secondary dark:bg-gray-950">
      <div className="container px-4 lg:px-8">
        <h2 className="Heading pb-2 border-b-2 border-white border-dashed w-fit m-auto text-center ">
          About
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 items-center md:justify-between mt-10 md:mt-28">
          <div className="w-2/5">
            <img src="/profile2.jpeg" alt="" />
          </div>
          <div className="w-3/5">
            <h3 className="font-primary font-semibold flex flex-col text-base text-center lg:text-start sm:text-lg lg:text-3xl text-primary">
              <span className="text-white">Assalamu alaikum....</span>
              <span className="text-base md:text-2xl lg:text-4xl pt-3 ">
                This is Anil Howa....
              </span>
            </h3>
            <p className="w-auto pt-5 font-primary font-medium leading-6 lg:leading-8 text-xs md:text-lg text-center lg:text-start lg:text-balance text-white">
              Welcome to my profile! I am a Front End Developer with over 1 year
              experience in this field. I specialize in HTML, CSS, Bootstrap,
              Tailwind, JavaScript, React and Next.js to create custom,
              functional and user friendly web. I am strong believer in
              communication and collaboration and I always work closely with my
              clients to ensure that their needs are met and exceeded.
            </p>
            <div className="mt-8 text-center lg:text-start">
              <p className="text-white  font-primary font-medium text-base md:text-lg lg:text-2xl">
                <span className="text-primary">Nationality</span>: Bangladeshi
              </p>
              <p className="py-4  text-white font-primary font-medium text-base md:text-lg lg:text-2xl">
                <span className="text-primary">Email</span> :
                howa.anil@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
