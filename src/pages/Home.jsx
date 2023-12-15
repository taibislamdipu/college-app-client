import Search from "../components/Search";

const Home = () => {
  return (
    <div className="testb wrapper">
      <Search />
      <div className="testb">
        <h2>College Card</h2>
      </div>
      <div className="testb">
        <h2>College Card</h2>

        <div>
          <img src="" alt="" />
          <h2>Name:</h2>
          <p>Admission Date:</p>
          <p>Admission Date:</p>
        </div>
      </div>

      <div className="">
        <h2>Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((data, index) => (
            <div className="col-span-1 testb mx-auto" key={index}>
              <img
                className="object-contain"
                src="https://picsum.photos/500/300"
                alt="picture"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
