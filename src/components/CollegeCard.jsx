import { Link } from "react-router-dom";
import Button from "./Button";

const CollegeCard = (props) => {
  const { imgUrl, name, admissionDate, events, research, sports, slug } =
    props.data;

  return (
    <div className="p-4 border-2 rounded transition flex flex-col gap-4">
      <div>
        <img className="object-contain w-full" src={imgUrl} alt="picture" />
      </div>

      <div>
        <ul>
          <li>
            <span className="font-medium">Name:</span>{" "}
            <span className="text-secondary">{name}</span>
          </li>
          <li>
            <span className="font-medium">Admission Date:</span>{" "}
            <span className="text-secondary">{admissionDate}</span>
          </li>
          <li>
            <span className="font-medium">Events:</span>{" "}
            <span className="text-secondary">{events}</span>
          </li>
          <li>
            <span className="font-medium">Research History:</span>{" "}
            <span className="text-secondary">{research}</span>
          </li>
          <li>
            <span className="font-medium">Sports:</span>{" "}
            <span className="text-secondary">{sports}</span>
          </li>
        </ul>
      </div>

      <div className="pb-3 w-min whitespace-nowrap">
        <Link to={`/college/${slug}`}>
          <Button btnText={"See Details"} />
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
