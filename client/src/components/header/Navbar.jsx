import PropTypes from "prop-types";
import nav_bg from "../../assets/images/nav_bg.jpg";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
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
    </div>
  );
};

Navbar.propTypes = {
  handleSwitchTheme: PropTypes.func,
  theme: PropTypes.string,
};

export default Navbar;
