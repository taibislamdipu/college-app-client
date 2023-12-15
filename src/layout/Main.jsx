import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Main;
