const Skill = () => {
  return (
    <section className="py-10 dark:bg-gray-950">
      <div className="container">
        <h2 className="Heading pb-3 border-b-4 border-secondary dark:border-white border-dashed w-fit m-auto text-center ">
          Skill ShowCase
        </h2>
        <p className="w-auto lg:w-[800px] pt-14 text-center m-auto font-primary font-medium leading-8 text-lg text-balance dark:text-white text-secondary">
          I have extensive knowledge of front-end technologies that I am
          confident will meet your needs. Customer satisfaction is my top
          priority and I pride myself on maintaining strict adherence to
          schedules, which I consider one of my strengths. My skills are
          showcased below for your review. You can rely on me!!!
        </p>

        <div className=" bg-[#DBD3D3] mt-10 px-5 py-10 rounded-lg">
          <ul className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-8 items-center justify-center">
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
            <li className="w-16 h-16">
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
