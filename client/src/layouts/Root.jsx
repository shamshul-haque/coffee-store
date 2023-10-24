import { Outlet } from "react-router-dom";
import { useTheme } from "../components/customHooks/useTheme";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

const Root = () => {
  const { theme, handleSwitchTheme } = useTheme();

  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar handleSwitchTheme={handleSwitchTheme} theme={theme} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
