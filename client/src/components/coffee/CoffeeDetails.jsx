import { BiArrowBack } from "react-icons/bi";
import { Link, useLoaderData } from "react-router-dom";
import form_bg from "../../assets/images/form_bg.png";

const CoffeeDetails = () => {
  const coffeeDetails = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo, price } =
    coffeeDetails;
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
        <div className="bg-[#F4F3F0] p-5 md:p-10 rounded mt-5 flex flex-col md:flex-row justify-center items-center md:gap-10">
          <div>
            <img src={photo} alt={name} />
          </div>
          <div className="font-raleway">
            <p className="text-sm">
              <span className="font-bold text-lg">Name: </span>
              {name}
            </p>
            <p className="text-sm">
              <span className="font-bold text-lg">Chef: </span>
              {chef}
            </p>
            <p className="text-sm">
              <span className="font-bold text-lg">Supplier: </span>
              {supplier}
            </p>
            <p className="text-sm">
              <span className="font-bold text-lg">Taste: </span>
              {taste}
            </p>
            <p className="text-sm">
              <span className="font-bold text-lg">Category: </span>
              {category}
            </p>
            <p className="text-sm">
              <span className="font-bold text-lg">Details: </span>
              {details}
            </p>
            <p className="text-sm">
              <span className="font-bold text-lg">Price: </span>
              {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
