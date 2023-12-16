import { useParams } from "react-router-dom";

const College = () => {
  let { slug } = useParams();
  return (
    <>
      <div className="wrapper testb">
        <h2 className="py-8 text-5xl text-center bg-primary text-white">
          {slug}
        </h2>
        <p>address</p>

        <h2>Overview</h2>
        <p>
          California State University: San Bernardino is a very large, 4-year,
          public technical college. This coed college is located in a suburban
          setting and is primarily a commuter campus. It offers certificate,
          bachelor, master, and doctoral degrees.
        </p>
      </div>
    </>
  );
};

export default College;
