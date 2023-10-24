import PropTypes from "prop-types";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import nav_bg from "../../assets/images/nav_bg.jpg";
import logo from "../../assets/logo/logo.png";

const Navbar = ({ theme, handleSwitchTheme }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${nav_bg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex items-center justify-center gap-2"
    >
      <img src={logo} alt="logo" className="w-10" />
      <h1 className="text-3xl text-white font-rancho py-5">
        Espresso Emporium
      </h1>
      <button
        onClick={handleSwitchTheme}
        className=" text-slate-500 dark:text-white right-2 top-2 bg-[#2658a3] text-lg p-2 rounded-md"
      >
        {theme === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
      </button>
    </div>
  );
};

Navbar.propTypes = {
  handleSwitchTheme: PropTypes.func,
  theme: PropTypes.string,
};

export default Navbar;
