const AboutDetails = () => {
  return (
    <section className="py-10 bg-secondary">
      <div className="container">
        <h2 className="Heading pb-2 border-b-4 border-white border-dashed w-fit m-auto text-center ">
          About
        </h2>
        <div className="flex items-start justify-between mt-28">
          <div className="w-2/5">
            <img src="/profile.jpg" alt="" />
          </div>
          <div className="w-3/5">
            <h3 className="font-primary font-semibold flex flex-col text-3xl text-primary">
              <span className="text-white">Assalamu alaikum....</span>
              <span className="text-4xl pt-3 ">This is Anil Howa....</span>
            </h3>
            <p className="w-auto pt-5 font-primary font-medium leading-8 text-lg text-balance text-white">
              Welcome to my profile! I am a Front End Developer with over 2
              years experience in this field. I specialize in HTML, CSS,
              Bootstrap, Tailwind, JavaScript, React and Next js to create
              custom, functional and user friendly web. I am strong believer in
              communication and collaboration and I always work closely with my
              clients to ensure that their needs are met and exceeded.
            </p>
            <div className="mt-8">
              <p className="text-white font-primary font-medium text-2xl">
                <span className="text-primary">Nationality</span>: Bangladeshi
              </p>
              <p className="py-4 text-white font-primary font-medium text-2xl">
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
