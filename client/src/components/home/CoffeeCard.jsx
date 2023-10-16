import PropTypes from "prop-types";
import { AiFillEye } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, photo, price } = coffee;

  return (
    <div className="flex items-center justify-evenly bg-[#F4F3F0] p-5 rounded">
      <figure>
        <img src={photo} alt={name} className="w-16 lg:w-32 h-32 lg:h-48" />
      </figure>
      <div className="font-raleway space-y-1">
        <p className="text-xs md:text-base">
          <span className="font-bold">Name:</span> {name}
        </p>
        <p className="text-xs md:text-base">
          <span className="font-bold">Chef:</span> {chef}
        </p>
        <p className="text-xs md:text-base">
          <span className="font-bold">Price:</span> {price} Taka
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <button className="text-sm md:text-xl text-white bg-[#D2B48C] p-1 rounded">
          <AiFillEye />
        </button>
        <button className="text-sm md:text-xl text-white bg-[#3C393B] p-1 rounded">
          <BsFillPencilFill />
        </button>
        <button className="text-sm md:text-xl text-white bg-[#EA4744] p-1 rounded">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
};

export default CoffeeCard;