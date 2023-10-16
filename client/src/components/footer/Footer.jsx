import {
  BsFacebook,
  BsFillTelephoneFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import footer_bg1 from "../../assets/images/footer_bg1.jpg";
import footer_bg2 from "../../assets/images/footer_bg2.jpg";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${footer_bg1})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="px-5 md:px-10 lg:px-20 py-10 flex flex-col md:flex-row justify-between gap-5"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-10" />
            <h1 className="text-3xl text-[#331A15] font-rancho">
              Espresso Emporium
            </h1>
          </div>
          <p className="mt-1 font-raleway">
            Awaken Your Senses at Espresso Emporium, Where Every Sip of Our
            Exceptional Coffee is a Moment of Bliss.
          </p>
          <div className="flex items-center gap-2 text-[#331A15] text-2xl mt-3">
            <Link to="#">
              <BsFacebook />
            </Link>
            <Link to="#">
              <BsTwitter />
            </Link>
            <Link to="#">
              <BsInstagram />
            </Link>
            <Link to="#">
              <BsLinkedin />
            </Link>
          </div>
          <h2 className="text-3xl text-[#331A15] font-rancho mt-5">
            Get in Touch
          </h2>
          <div className="mt-2 space-y-1 font-raleway">
            <p className="flex items-center gap-2 text-[#331A15]">
              <BsFillTelephoneFill />
              <span>+880 1406680846</span>
            </p>
            <p className="flex items-center gap-2 text-[#331A15]">
              <GrMail />
              <span>shamshul.haque.dev@gmail.com</span>
            </p>
            <p className="flex items-center gap-2 text-[#331A15]">
              <MdLocationOn />
              <span>71/A, Uttar Jatrabari, Dhaka</span>
            </p>
          </div>
        </div>
        <div className="flex-1">
          <h2 className="text-3xl text-[#331A15] font-rancho">
            Connect with Us
          </h2>
          <form className="space-y-4 mt-5 font-raleway">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-2 rounded outline-0 text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 rounded outline-0 text-sm"
            />
            <textarea
              name="message"
              cols="10"
              rows="2"
              placeholder="Message"
              className="w-full p-2 rounded outline-0 text-sm"
            />
            <input
              type="submit"
              value="Send Message"
              className="text-xl text-[#331A15] font-rancho border-2 border-[#331A15] px-3 py-2 rounded-full cursor-pointer"
            />
          </form>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${footer_bg2})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <p className="text-sm text-white text-center font-rancho py-5">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
