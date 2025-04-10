import AboutDetails from "../components/about/AboutDetails";
import Hero from "../components/home/Hero";
import Skill from "../components/skill/Skill";
import ServiceItems from "../components/service/ServiceItems";
import PortfolioItems from "./../components/portfolio/PortfolioItems";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="pt-20">
      <Hero />
      {/* <AboutDetails /> */}
      <Skill />
      {/* <ServiceItems /> */}
      <PortfolioItems />
      <Testimonial />
    </div>
  );
};

export default Home;
