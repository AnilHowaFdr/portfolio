import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaHandPointRight } from "react-icons/fa";
import { motion } from "motion/react";
import { ReactTyped } from "react-typed";
const Hero = () => {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnFocus: true,
  };
  return (
    <section className="dark:bg-gray-950 py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:justify-between ">
          <div className="w-1/2 lg:px-2">
            <h2 className="font-primary py-6 text-2xl text-center lg:text-start sm:text-3xl lg:text-5xl font-bold text-secondary dark:text-white">
              Hello!
            </h2>
            <h1 className="font-primary text-center lg:text-start text-2xl md:text-4xl lg:text-6xl font-bold text-secondary dark:text-white">
              I am <span className="text-primary uppercase">Anil Howa</span>
            </h1>
            <h2 className="flex items-center gap-3 lg:gap-6 justify-center lg:justify-start">
              <span>
                <FaHandPointRight className="text-3xl lg:text-5xl text-secondary dark:text-white" />
              </span>
              <ReactTyped
                className="gradient_text font-primary text-third py-6 text-xl sm:text-2xl lg:text-4xl font-bold"
                strings={["Front End Developer", "React Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </h2>

            <p className="w-auto pt-5 font-primary font-medium leading-8 text-lg text-center lg:text-start text-balance dark:text-white text-secondary">
              To build an eyecatching website with clear coding, user-friendly
              and get fast delivery, you can hire me.I am passionate about my
              work and I am always looking for new and innovative ways to
              improve my skills and knowledge.
            </p>
            <div className="flex justify-center lg:justify-start mt-10 gap-5 ">
              <button className="px-5 uppercase py-3 bg-primary text-fifth rounded-lg text-xl font-semibold">
                Resume
              </button>
              <button className="uppercase px-5 py-3 bg-primary text-fifth rounded-lg text-xl font-semibold">
                Hire Me
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="rounded-full w-auto lg:w-full overflow-hidden"
              src="/profile.jpg"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
