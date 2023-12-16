import GalleryCard from "../components/GalleryCard";
import Search from "../components/Search";
import CollegeCard from "../components/CollegeCard";
import { collegeData, researchData } from "../../utils/constants";
import Title from "../components/Title";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ResearchCard from "../components/ResearchCard";

const Home = () => {
  return (
    <div className="testb wrapper">
      <Search />

      <div className="testb">
        <h2>College Card</h2>
      </div>

      <div className="testb space-lg">
        <Title title={"College Card"} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10">
          {collegeData.map((data) => (
            <div className="col-span-1" key={data.id}>
              <CollegeCard data={data} />
            </div>
          ))}
        </div>
      </div>

      <div className="space-lg">
        <Title title={"Gallery"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => (
            <div className="col-span-1 testb mx-auto" key={index}>
              <GalleryCard />
            </div>
          ))}
        </div>
      </div>

      <div className="space-lg">
        <Title title={"Highlighted Student Research Works"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
          {researchData.map((data, index) => (
            <div className="col-span-1 mx-auto space-md" key={index}>
              <ResearchCard data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
