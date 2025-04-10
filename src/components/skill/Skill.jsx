const Skill = () => {
  return (
    <section className="py-20 dark:bg-gray-950 bg-amber-50">
      <div className="container px-4 lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="Heading pb-3 border-b-2 border-secondary dark:border-white border-dashed w-fit m-auto text-center ">
            Skill ShowCase
          </h2>
          <p className="w-auto lg:w-[900px] pt-14 font-primary font-medium leading-7 lg:leading-8 text-xs lg:text-lg text-center lg:text-balance dark:text-white text-secondary">
            I have extensive knowledge of front-end technologies that I am
            confident will meet your needs. Customer satisfaction is my top
            priority and I pride myself on maintaining strict adherence to
            schedules, which I consider one of my strengths. My skills are
            showcased below for your review. You can rely on me!!!
          </p>
        </div>

        <div className=" dark:bg-fifth mt-10 mx-2 px-5 py-10 rounded-lg">
          <ul className="px-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:justify-between lg:flex gap-2 lg:gap-8 ">
            <li className="w-16 h-16">
              <img src="/html.png" alt="html" />
            </li>
            <li className="w-16 h-16">
              <img src="/css.png" alt="html" />
            </li>
            <li className="w-16 h-16">
              <img src="/bootstrap.png" alt="html" />
            </li>
            <li className="w-16 h-16">
              <img src="/psd.png" alt="html" />
            </li>
            <li className="w-16 h-16">
              <img src="/figma.png" alt="html" />
            </li>
            <li className="w-16 h-16">
              <img src="/redux.png" alt="html" />
            </li>
            <li className="w-16 h-16">
              <img src="/javascript.png" alt="html" />
            </li>
            <li className="w-16 h-16">
              <img src="/tailwind.png" alt="html" />
            </li>
            <li className="w-16 h-16 ">
              <img src="/JQuery.png" alt="html" />
            </li>
            <li className="w-16 h-16">
              <img src="/react.png" alt="html" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skill;
