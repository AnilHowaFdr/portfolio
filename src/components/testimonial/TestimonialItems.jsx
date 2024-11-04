import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
const TestimonialItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnFocus: true,
  };
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="container">
        <h2 className="Heading pb-3 border-b-4 dark:text-white border-secondary dark:border-white border-dashed w-fit m-auto text-center ">
          Testimonial
        </h2>
        <p className="pt-10 text-lg text-center font-medium dark:text-white text-secondary font-primary">
          View public client reviews, where each client shares their perspective
          on working with us. I always prioritize strong communication and
          effective collaboration throughout each project.
        </p>
        <div>
          <Slider {...settings}>
            <div className="px-3 py-6 bg-third border-4 border-primary rounded-lg">
              <div className="flex justify-between items-start">
                <FaQuoteLeft className="text-xl text-secondary" />
                <ul className="flex gap-1 items-center text-secondary">
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                </ul>
              </div>
              <p>Very flexible and great work</p>
              <div>
                <img src="/profile" alt="image not found" />
                <h3>Tahmina Akter</h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialItems;
// Very fast and responsive, Amazing work quality. Thank you so much
// Your strong technical skills and attention to detail have made a big impact. Your deliver high-quality work and collaborate effectively with the team. Highly recommended
// Thank you so much, I like you quick delivery and quality work, that great. Thanks again
// She is best in communciation and understanding what needs to be done. I was surprised how fast she completed the job. Will definitely work again with her.
