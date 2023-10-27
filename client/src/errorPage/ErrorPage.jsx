import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import not_found from "../assets/404/404.gif";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-10 lg:px-20">
        <Link to="/">
          <button className="pt-10 flex items-center gap-2 text-xl text-[#374151] hover:text-[#D2B48C] font-rancho">
            <BiArrowBack />
            <span>Back to home</span>
          </button>
        </Link>
        <img src={not_found} alt="not_found" className="w-2/4 mx-auto" />
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
