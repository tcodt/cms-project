import { useState } from "react";
import { userRows } from "../../Datas";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Swal from "sweetalert2";
import "./UsersList.css";

export default function UsersList() {
  const [userData, setUserData] = useState(userRows);

  const userDeleteHandler = (userId) => {
    Swal.fire({
      title: "Are you sure to delete this user?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      showCloseButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        setUserData(userData.filter((user) => user.id !== userId));
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });
      }
    });
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    {
      field: "username",
      headerNmae: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/">
            <div className="flex items-center">
              <img
                src={params.row.avatar}
                className="w-10 h-10 rounded-full mx-2 border border-sky-500"
                alt="User Avatar"
              />
              {params.row.username}
            </div>
          </Link>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
              <button className="p-1 mx-2 font-sans font-medium rounded bg-green-500 text-white hover:bg-green-600 transition">
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="text-xl mx-2 text-red-500 cursor-pointer hover:text-red-600 transition"
              onClick={() => userDeleteHandler(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="bg-white p-2 m-8 rounded shadow-lg hover:shadow-sm transition user-list-flex">
      <DataGrid
        rows={userData}
        columns={columns}
        pageSize={2}
        disableRowSelectionOnClick
      />
    </div>
  );
}
