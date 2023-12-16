import GalleryCard from "../components/GalleryCard";
import Search from "../components/Search";
import CollegeCard from "../components/CollegeCard";
import { collegeData, researchData } from "../../utils/constants";
import Title from "../components/Title";
import ResearchCard from "../components/ResearchCard";
import Footer from "../components/Footer";
import { IoIosSearch } from "react-icons/io";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="space-div">
      <div className="wrapper">
        <h2 className="text-4xl flex items-center gap-3 text-primary">
          <IoIosSearch className="inline" />
          Search College Name
        </h2>
        <Search />
      </div>

      <div className=" space-lg wrapper">
        <Title title={"Top Colleges"} />

        <div className="max-w-3xl space-md mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-10">
          {collegeData.map((data) => (
            <div className="col-span-1" key={data.id}>
              <CollegeCard data={data} />
            </div>
          ))}
        </div>

        <div className="w-min whitespace-nowrap mx-auto py-6">
          <Button btnText={"Show More College"} />
        </div>
      </div>

      <div className="space-lg wrapper">
        <Title title={"Gallery"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => (
            <div className="col-span-1  mx-auto" key={index}>
              <GalleryCard />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-primary text-white py-20">
        <div className="space-lg wrapper ">
          <Title
            className="!text-white"
            title={"Highlighted Student Research Works"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
            {researchData.map((data, index) => (
              <div className="col-span-1 mx-auto space-md" key={index}>
                <ResearchCard data={data} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
