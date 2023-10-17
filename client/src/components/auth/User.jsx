import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const User = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);

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
        const deleteUser = async () => {
          const res = await fetch(
            `https://server-9t5j3hb2c-shamshul-haque.vercel.app/user/${id}`,
            {
              method: "DELETE",
            }
          );
          const data = await res.json();
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            const remaining = users.filter((user) => user._id !== id);
            setUsers(remaining);
          }
        };
        deleteUser();
      }
    });
  };

  return (
    <div>
      <p>users:{loadedUsers.length}</p>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>SL No</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Login</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.lastLogin}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="text-sm md:text-xl text-white bg-[#EA4744] p-1 rounded"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
