import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import form_bg from "../../assets/images/form_bg.png";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    e.currentTarget.reset();
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        const lastLogin = result.user?.metadata?.lastSignInTime;
        const newUser = { email, lastLogin };
        const getData = async () => {
          const res = await fetch(
            `https://server-dfc9wiib1-shamshul-haque.vercel.app/user`,
            {
              method: "PATCH",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(newUser),
            }
          );
          const data = await res.json();
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Success!",
              text: "Coffee Item Updated Successfully",
              icon: "success",
              confirmButtonText: "Ok",
            });
          }
        };
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
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
            Login Now
          </h1>
          <form onSubmit={handleLogin} className="mt-5 space-y-5 font-raleway">
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
            <div className="flex items-center justify-between">
              <p className="flex gap-1">
                <input type="checkbox" name="terms" />
                <span className="text-sm">Remember Me</span>
              </p>
              <Link to="#" className="text-sm text-[#D2B48C] hover:underline">
                Forgot Password
              </Link>
            </div>
            <input
              type="submit"
              value="Login"
              className="text-xl p-2 rounded border w-full text-center font-rancho bg-[#D2B48C] cursor-pointer hover:border-[#331A15]"
            />
          </form>
          <p className="text-sm font-raleway text-center pt-5">
            <span>Have An Account?</span>{" "}
            <Link
              to="/register"
              className="text-[#D2B48C] hover:underline font-medium font-raleway"
            >
              Register
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
