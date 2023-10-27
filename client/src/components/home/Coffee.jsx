import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import product_bg from "../../assets/images/product_bg.png";
import CoffeeCard from "./CoffeeCard";

const Coffee = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div
      style={{
        backgroundImage: `url(${product_bg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="px-5 md:px-10 lg:px-20 my-10"
    >
      <div className="text-[#331A15] text-center font-rancho">
        <p className="text-lg">--- Sip & Savor ---</p>
        <h1 className="text-4xl">Our Popular Products</h1>
        <div className="mt-5">
          <Link
            to="/addCoffee"
            className="p-2 rounded border text-center font-rancho bg-[#D2B48C] cursor-pointer hover:border-[#331A15] hover:text-white"
          >
            Add Coffee
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          />
        ))}
      </div>
    </div>
  );
};

export default Coffee;
