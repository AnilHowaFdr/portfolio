import Price from "../components/service/Price";
import ServiceItems from "../components/service/ServiceItems";
import WorkingProcess from "../components/service/WorkingProcess";

const Service = () => {
  return (
    <div className="pt-20">
      <ServiceItems />
      <WorkingProcess />
      <Price />
    </div>
  );
};

export default Service;
