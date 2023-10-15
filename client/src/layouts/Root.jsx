import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
