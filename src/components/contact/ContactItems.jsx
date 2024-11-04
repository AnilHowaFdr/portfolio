import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactItems = () => {
  return (
    <section className="py-14">
      <div className="container">
        <div className=" py-8 px-6">
          <div className="">
            <h2 className="text-5xl text-center font-primary text-primary font-bold">
              "Let’s team up to make your next project a success."
            </h2>
            <p className="font-normal text-xl pt-9 pb-2 text-center">
              Feel free to reach out to me via email:
            </p>
            <p className="text-center">
              <Link
                className="border-b-2 border-b-secondary font-medium text-xl text-secondary"
                to="https://howa.anil@gmail.com"
              >
                howa.anil@gmail.com
              </Link>
            </p>
            <div className="mt-8">
              <ul className="flex items-center justify-center dark:text-white text-2xl gap-6 text-secondary">
                <li>
                  <Link to="https://www.linkedin.com/in/anil-howa-profile1/">
                    <FaLinkedin />
                  </Link>
                </li>
                <li>
                  <Link to="https://github.com/AnilHowaFdr">
                    <FaGithub />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactItems;
