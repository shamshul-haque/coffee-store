import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import form_bg from "../../assets/images/form_bg.png";

const AddCoffee = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${form_bg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="px-5 md:px-10 lg:px-20 py-10">
        <Link to="/">
          <button className="flex items-center gap-2 text-xl text-[#374151] hover:text-[#D2B48C] font-rancho">
            <BiArrowBack />
            <span>Back to home</span>
          </button>
        </Link>
        <div className="bg-[#F4F3F0] p-5 md:p-10 rounded mt-5">
          <div className="pb-5">
            <h1 className="text-3xl text-[#374151] font-rancho text-center">
              Add New Coffee
            </h1>
            <p className="text-center font-raleway text-slate-400">
              Elevate Our Coffee Experience by Adding a New Blend to Our Diverse
              Collection. Share the Aroma!
            </p>
          </div>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="flex flex-col font-raleway space-y-2 w-full md:w-1/2">
                <label className="">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="p-2 rounded outline-0 text-sm"
                />
              </div>
              <div className="flex flex-col font-raleway space-y-2 w-full md:w-1/2">
                <label>Chef</label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  className="p-2 rounded outline-0 text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="flex flex-col font-raleway space-y-2 w-full md:w-1/2">
                <label className="">Supplier</label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="p-2 rounded outline-0 text-sm"
                />
              </div>
              <div className="flex flex-col font-raleway space-y-2 w-full md:w-1/2">
                <label>Taste</label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="p-2 rounded outline-0 text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="flex flex-col font-raleway space-y-2 w-full md:w-1/2">
                <label className="">Category</label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="p-2 rounded outline-0 text-sm"
                />
              </div>
              <div className="flex flex-col font-raleway space-y-2 w-full md:w-1/2">
                <label>Details</label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="p-2 rounded outline-0 text-sm"
                />
              </div>
            </div>
            <div className="flex flex-col font-raleway space-y-2 w-full">
              <label className="">Photo</label>
              <input
                type="url"
                name="photo"
                placeholder="Enter photo url"
                className="p-2 rounded outline-0 text-sm"
              />
            </div>
            <input
              type="submit"
              value="Add Coffee"
              className="p-2 rounded border w-full text-center font-rancho bg-[#D2B48C] cursor-pointer hover:border-[#331A15]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
