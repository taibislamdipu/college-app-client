import GalleryCard from "../components/GalleryCard";
import Search from "../components/Search";
import CollegeCard from "../components/CollegeCard";

const Home = () => {
  return (
    <div className="testb wrapper">
      <Search />

      <div className="testb">
        <h2>College Card</h2>
      </div>

      <div className="testb">
        <h2>College Card</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => (
            <div className="mx-auto col-span-1" key={index}>
              <CollegeCard />
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <h2>Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => (
            <div className="col-span-1 testb mx-auto" key={index}>
              <GalleryCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
