import { useQuery } from "@tanstack/react-query";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {
  // tanstack query
  const {
    isPending,
    isError,
    error,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/user");
      return res.json();
    },
  });

  if (isPending) {
    return <span className="loading loading-ring loading-lg"></span>;
  }

  if (isError) {
    return <p className="text-red-400">{error.message}</p>;
  }

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
          const res = await fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE",
          });
          const data = await res.json();
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "User has been deleted.", "success");
            // const remaining = users.filter((user) => user._id !== id);
            // setUsers(remaining);
          }
        };
        deleteUser();
      }
    });
  };

  return (
    <div>
      {/* <p>users:{loadedUsers.length}</p> */}
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

export default Users;
