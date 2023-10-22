import PropTypes from "prop-types";
import { AiFillEye } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, photo, price } = coffee;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteItem = async () => {
          const res = await fetch(`http://localhost:5000/coffee/${id}`, {
            method: "DELETE",
          });
          const data = await res.json();
          if (data.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "Your coffee item has been deleted.",
              "success"
            );
            const remaining = coffees.filter((coffee) => coffee._id !== id);
            setCoffees(remaining);
          }
        };
        deleteItem();
      }
    });
  };

  return (
    <div className="flex items-center justify-between bg-[#F4F3F0] p-5 rounded">
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
        <Link to={`/updateCoffee/${_id}`}>
          <button className="text-sm md:text-xl text-white bg-[#3C393B] p-1 rounded">
            <BsFillPencilFill />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="text-sm md:text-xl text-white bg-[#EA4744] p-1 rounded"
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func,
};

export default CoffeeCard;
