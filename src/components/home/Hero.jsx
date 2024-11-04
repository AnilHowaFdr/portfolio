import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaHandPointRight } from "react-icons/fa";

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
    <section className="py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h2 className="font-primary py-6 text-5xl font-bold text-secondary">
              Hello!
            </h2>
            <h1 className="font-primary text-6xl font-bold text-secondary">
              I am <span className="text-primary uppercase">Anil Howa</span>
            </h1>
            <h2 className="font-primary flex items-center gap-8 text-primary py-6 text-4xl font-bold">
              <span>
                <FaHandPointRight className="text-5xl text-secondary" />
              </span>
              Front End Developer With React
            </h2>
            <p className="w-auto pt-5 font-primary font-medium leading-8 text-lg text-balance text-secondary">
              To build an eyecatching website with clear coding, user-friendly
              and get fast delivery, you can hire me.I am passionate about my
              work and I am always looking for new and innovative ways to
              improve my skills and knowledge.
            </p>
            <div className="flex mt-10 gap-5 ">
              <button className="px-5 uppercase py-3 bg-primary text-secondary rounded-lg text-xl font-semibold">
                Resume
              </button>
              <button className="uppercase px-5 py-3 bg-primary text-secondary rounded-lg text-xl font-semibold">
                Hire Me
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="rounded-full w-full overflow-hidden"
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
