import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Testimonialtools from "./Testimonialtools";

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
    arrows: true,
  };
  return (
    <section className="py-20 dark:bg-gray-950">
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2 className="Heading pb-3 border-b-4 dark:text-white border-secondary dark:border-white border-dashed w-fit m-auto text-center ">
          Testimonial
        </h2>
        <p className="pt-5 text-lg w-3/4 m-auto pb-20 text-center font-medium dark:text-white text-secondary font-primary">
          View public client reviews, where each client shares their perspective
          on working with us. I always prioritize strong communication and
          effective collaboration throughout each project.
        </p>
        <div>
          <Slider {...settings}>
            <div>
              <Testimonialtools
                src="/user4.png"
                detail="Your strong technical skills and attention to detail have made a big impact. Your deliver high-quality work and collaborate effectively with the team. Highly recommended."
                title="Shetu Barman"
              />
            </div>
            <div>
              <Testimonialtools
                src="/user5.png"
                detail="Your strong technical skills and attention to detail have made a big impact. Your deliver high-quality work and collaborate effectively with the team. Highly recommended"
                title="Elias Hasan"
              />
            </div>
            <div>
              <Testimonialtools
                src="/user3.png"
                detail="She is best in communciation and understanding what needs to be done. I was surprised how fast she completed the job. Will definitely work again with her."
                title="Habibullah Ansary"
              />
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
