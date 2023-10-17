import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="mt-5 font-rancho">
      <div className="flex items-center gap-3 max-w-xs mx-auto mb-5">
        <hr className="flex-1 border-[#331A15]" />
        <span className="text-center">OR</span>
        <hr className="flex-1 border-[#331A15]" />
      </div>
      <button className="w-full border border-[#331A15] hover:border-[#D2B48C] transition-all duration-300 p-2 rounded font-medium flex items-center justify-center gap-1">
        <FcGoogle className="text-2xl" />
        <span className="text-xl">Continue With Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
