import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import form_bg from "../../assets/images/form_bg.png";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const photo = form.get("photo");
    e.currentTarget.reset();
    console.log(name, email, password, photo);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${form_bg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="px-5 md:px-10 lg:px-20 py-10"
    >
      <Link to="/">
        <button className="flex items-center gap-2 text-xl text-[#374151] hover:text-[#D2B48C] font-rancho">
          <BiArrowBack />
          <span>Back to home</span>
        </button>
      </Link>
      <div className="flex flex-col items-center mt-5 ">
        <div className="w-full max-w-sm bg-[#F4F3F0] rounded p-5">
          <h1 className="text-3xl text-[#374151] text-center font-rancho">
            Create Account
          </h1>
          <form
            onSubmit={handleRegistration}
            className="mt-5 space-y-5 font-raleway"
          >
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="p-2 rounded outline-0 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 rounded outline-0 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-2 rounded outline-0 text-sm"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="url"
                name="photo"
                placeholder="Photo URL"
                className="p-2 rounded outline-0 text-sm"
                required
              />
            </div>
            <div className="flex gap-1">
              <input type="checkbox" name="check" required />
              <Link to="#" className="text-sm">
                Accept{" "}
                <span className="text-[#D2B48C] hover:underline">
                  Terms and Conditions
                </span>
              </Link>
            </div>
            <input
              type="submit"
              value="Register"
              className="p-2 rounded border w-full text-center font-rancho bg-[#D2B48C] cursor-pointer hover:border-[#331A15]"
            />
          </form>
          <p className="text-sm font-raleway text-center pt-5">
            <span>Have An Account?</span>{" "}
            <Link
              to="/login"
              className="text-[#D2B48C] hover:underline font-medium font-raleway"
            >
              Login
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
