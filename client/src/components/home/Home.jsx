import { useLoaderData } from "react-router-dom";
import product_bg from "../../assets/images/product_bg.png";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const loadCoffees = useLoaderData();

  return (
    <div
      style={{
        backgroundImage: `url(${product_bg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="px-5 md:px-10 lg:px-20 py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {loadCoffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Home;
