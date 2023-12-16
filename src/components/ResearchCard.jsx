import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResearchCard = (props) => {
  const { title, description } = props.data;
  return (
    <div className="flex flex-col gap-4 border py-4">
      <Link to="#">
        <h2 className="underline border-primary transition  font-semibold">
          <span>{title}</span> <FaArrowRight className="inline ml-2" />
        </h2>
      </Link>
      <p className="text-secondary">{description}</p>
    </div>
  );
};

export default ResearchCard;
