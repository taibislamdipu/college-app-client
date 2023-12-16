import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResearchCard = (props) => {
  const { title, description } = props.data;
  return (
    <div className="flex flex-col gap-4 border-t py-4">
      <Link to="#">
        <h2 className="underline transition border-primary font-medium hover:font-semibold">
          <span className="text-lg">{title}</span>{" "}
          <FaArrowRight className="inline ml-2" />
        </h2>
      </Link>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default ResearchCard;
