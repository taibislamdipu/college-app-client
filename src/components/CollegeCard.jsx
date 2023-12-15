import { Link } from "react-router-dom";
import Button from "./Button";

const CollegeCard = () => {
  return (
    <div className="testb p-4 border hover:shadow-xl transition ">
      <div className="mb-4">
        <img
          className="object-contain"
          src="https://picsum.photos/300/150"
          alt="picture"
        />
      </div>
      <h2>
        <span className="font-medium">Name:</span> Lorem, ipsum.
      </h2>
      <p>
        <span className="font-medium">Admission Date:</span> 15/12/2023
      </p>
      <p>
        <span className="font-medium">Events:</span> Lorem ipsum dolor sit.
      </p>
      <p>
        <span className="font-medium">Research History:</span> 3 papers
      </p>
      <p>
        <span className="font-medium">Sports:</span> Lorem, ipsum, dolor.
      </p>

      <div className="mt-4">
        <Link to="/google.com">
          <Button btnText={"See Details"} />
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
