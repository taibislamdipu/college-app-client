import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Image from "./Image";

const CollegeCard = (props) => {
  const {
    imgUrl,
    name,
    address,
    admissionDate,
    events,
    research,
    sports,
    slug,
  } = props.data;

  return (
    <>
      <Link to={`/college/${slug}`} className="group">
        <div className="lg:grid grid-cols-5 hover:shadow-xl border transition rounded-2xl gap-4 ">
          <div className="col-span-3 space-md p-6">
            <div>
              <h2 className="text-2xl font-semibold group-hover:underline text-primary">
                {name}

                <FaArrowRight className="inline ml-2" />
              </h2>
              <p>{address}</p>
            </div>
            <hr />
            <div>
              <ul className="space-y-2">
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
          </div>
          <div className="col-span-2">
            <Image
              className="object-cover w-full h-full lg:rounded-tr-2xl lg:rounded-br-2xl"
              src={imgUrl}
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default CollegeCard;
