import { useParams } from "react-router-dom";
import DescriptionText from "../components/DescriptionText";
import Title from "../components/Title";
import Image from "../components/Image";

const College = () => {
  let { slug } = useParams();
  return (
    <>
      <div className="wrapper space-div">
        <div className="lg:flex gap-4">
          <div className="">
            <Image
              src="https://picsum.photos/280/300"
              className="object-cover w-full lg:w-56 h-48"
            />
          </div>

          <div className="bg-primary w-full space-md p-4">
            <h2 className="text-2xl lg:text-5xl text-white">{slug}</h2>
            <p className="text-white">Berkeley, California</p>
          </div>
        </div>

        <div>
          <Title className="!text-2xl" title={"Overview"} />
          <DescriptionText>
            California State University: San Bernardino is a very large, 4-year,
            public technical college. This coed college is located in a suburban
            setting and is primarily a commuter campus. It offers certificate,
            bachelor, master, and doctoral degrees.
          </DescriptionText>
        </div>

        <div>
          <Title className="!text-2xl" title={"Admissions Summary"} />
          <DescriptionText>
            California State University: Dominguez Hills is less selective with
            an acceptance rate of 89%. Students that get into California State
            University: Dominguez Hills have an SAT score between 790–930* or an
            ACT score of 15 - 15*.
          </DescriptionText>
        </div>

        <div>
          <Title className="!text-2xl" title={"Costs"} />
          <DescriptionText>
            California State University: Dominguez Hills costs $4,500 after
            scholarships and grants, with 68% of students receiving financial
            aid and an average aid package of $6,626. Financial aid applications
            are due March 2.
          </DescriptionText>
        </div>

        <div>
          <Title className="!text-2xl" title={"Events"} />
          <li className="text-secondary">
            Environmental summits, sustainability workshops.
          </li>
        </div>
        <div>
          <Title className="!text-2xl" title={"Research Works"} />
          <li className="text-secondary">
            Environmental summits, sustainability workshops.
          </li>
        </div>
        <div>
          <Title className="!text-2xl" title={"Sports"} />
          <li className="text-secondary">
            Environmental summits, sustainability workshops.
          </li>
        </div>
      </div>
    </>
  );
};

export default College;
